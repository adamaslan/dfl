from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.docstore.document import Document
import pandas as pd
import os
import time
import numpy as np

def create_optimized_vector_store_with_metrics(csv_path):
    # 1. Load and preprocess articles
    df = pd.read_csv(
        csv_path,
        quoting=1,  # QUOTE_ALL
        escapechar='\\',
        encoding='utf-8'
    )

    if 'articles' not in df.columns:
        raise ValueError("CSV file must contain an 'articles' column")

    articles = df['articles'].fillna('').tolist()

    # 2. Improved text splitting
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100,
        separators=["\n\n", "\n", ". ", "! ", "? ", " ", ""]
    )

    # 3. Create documents with metadata
    documents = []
    for idx, article in enumerate(articles):
        try:
            cleaned_article = " ".join(str(article).strip().split())
            chunks = text_splitter.split_text(cleaned_article)
            for i, chunk in enumerate(chunks):
                documents.append(Document(
                    page_content=chunk,
                    metadata={"source": f"article_{idx}", "chunk": i}
                ))
        except Exception as e:
            print(f"Warning: Could not process article {idx}: {str(e)}")

    if not documents:
        raise ValueError("No valid documents were created from the input articles")

    # 4. Initialize embeddings
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2",
        model_kwargs={'device': 'mps'},
        encode_kwargs={
            'normalize_embeddings': True,
            'batch_size': 32
        }
    )

    # 5. Create FAISS index
    vector_store = FAISS.from_documents(
        documents=documents,
        embedding=embeddings,
        distance_strategy="COSINE"
    )

    # 6. Save index
    save_path = os.path.abspath("blog_faiss")
    vector_store.save_local(save_path)
    print(f"Optimized FAISS index saved to: {save_path}")
    print(f"Processed {len(documents)} chunks from {len(articles)} articles")

    # 7. LangChain Enhancements (FIXED)
    # FIX 1: The modern way to get a retriever is directly from the vector store.
    # This replaces the need for the old `EmbeddingRetriever`.
    retriever = vector_store.as_retriever()

    # FIX 2: Replaced the missing `filter_metadata` function with a simple,
    # standard Python list comprehension that achieves the same result.
    filtered_docs = [doc for doc in documents if doc.metadata.get("chunk") == 0]

    # 8. Metrics block (Now points to the corrected retriever)
    print("\n📊 Embedding & Retrieval Metrics:")
    try:
        # Embedding density
        sample_embeddings = embeddings.embed_documents([doc.page_content for doc in documents[:100]])
        norms = [np.linalg.norm(vec) for vec in sample_embeddings]
        avg_norm = np.mean(norms)

        # Redundancy
        unique_chunks = set(doc.page_content for doc in documents)
        redundancy_ratio = 1 - len(unique_chunks) / len(documents) if documents else 0

        # Retrieval latency
        start_time = time.time()
        # Use the new, correctly initialized retriever
        _ = retriever.get_relevant_documents("sample query")
        latency = time.time() - start_time

        print(f"- Total chunks: {len(documents)}")
        print(f"- Unique chunks: {len(unique_chunks)}")
        print(f"- Redundancy ratio: {redundancy_ratio:.2f}")
        print(f"- Avg embedding norm (from sample): {avg_norm:.4f}")
        print(f"- Retrieval latency (sample query): {latency:.4f}s")
        print(f"- Metadata-filtered docs (chunk=0): {len(filtered_docs)}")
        if articles:
            print(f"- Coverage score: {len(documents) / len(articles):.2f} chunks/article")
        print(f"- Semantic cohesion (adjacent chunk similarity): TBD")
        print(f"- Recall@k / Precision@k: TBD (requires labeled queries)")
        print(f"- Query drift: TBD (requires query-to-centroid comparison)")
    except Exception as e:
        print(f"Metric computation error: {str(e)}")

    return vector_store

# Usage example
if __name__ == "__main__":
    try:
        vector_store = create_optimized_vector_store_with_metrics("articles2.csv")
        print("\nVector store created successfully!")
    except Exception as e:
        print(f"\nError creating vector store: {str(e)}")