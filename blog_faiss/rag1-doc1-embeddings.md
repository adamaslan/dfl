
# 🧠 Summary: Optimized FAISS Vector Store Creation

This script builds a robust FAISS vector store from a CSV of articles using LangChain and HuggingFace embeddings. It emphasizes modularity, error handling, and performance tuning.

---

## 1. 📥 Data Loading & Preprocessing

1. Uses `pandas` to read a CSV file containing articles.
2. Applies `quoting=1` to handle fully quoted fields (`QUOTE_ALL`).
3. Uses `escapechar='\\'` to manage escaped characters.
4. Ensures UTF-8 encoding for compatibility.
5. Validates the presence of an `'articles'` column.
6. Fills missing article entries with empty strings.
7. Converts the article column to a list for processing.

---

## 2. ✂️ Text Splitting Strategy

8. Utilizes `RecursiveCharacterTextSplitter` from LangChain.
9. Sets `chunk_size=500` to preserve paragraph-level context.
10. Applies `chunk_overlap=100` to maintain continuity across chunks.
11. Prioritizes paragraph and sentence boundaries using custom separators:
    - `\n\n`, `\n`, `. `, `! `, `? `, ` `, `""`
12. Enables context-aware chunking for better semantic embedding.

---

## 3. 📄 Document Creation with Metadata

13. Iterates through each article with index tracking.
14. Cleans each article by stripping and collapsing whitespace.
15. Splits cleaned text into chunks using the splitter.
16. Wraps each chunk in a LangChain `Document` object.
17. Adds metadata: source article index and chunk number.
18. Catches and logs exceptions during article processing.
19. Skips articles that fail to process without halting execution.
20. Validates that at least one document was successfully created.

---

## 4. 🔍 Embedding Initialization

21. Uses `HuggingFaceEmbeddings` from LangChain.
22. Loads the model `sentence-transformers/all-MiniLM-L6-v2`.
23. Targets Apple’s Metal Performance Shaders (`device='mps'`) for acceleration.
24. Normalizes embeddings for cosine similarity.
25. Sets `batch_size=32` to optimize throughput.

---

## 5. 🧭 FAISS Index Construction

26. Creates a FAISS vector store using `FAISS.from_documents`.
27. Embeds all document chunks using the initialized model.
28. Specifies `distance_strategy="COSINE"` for normalized vector comparison.
29. Ensures compatibility between embedding normalization and distance metric.

---

## 6. 💾 Saving & Verification

30. Resolves absolute path for saving the index (`blog_faiss`).
31. Saves the FAISS index locally using `save_local`.
32. Prints confirmation of save location.
33. Logs the number of processed chunks.
34. Logs the number of original articles.

---

## 7. 🚀 Execution & Error Handling

35. Wraps the main function in a `try-except` block.
36. Calls `create_optimized_vector_store("articles2.csv")`.
37. Prints success message if vector store is created.
38. Catches and prints any exceptions during execution.
39. Ensures graceful failure without crashing.
40. Uses `__name__ == "__main__"` to enable script execution.
41. Supports modular reuse as an importable function.
42. Provides a clear entry point for CLI or batch runs.

