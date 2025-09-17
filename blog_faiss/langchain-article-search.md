# Article Recommendation and RAG System

## Overview
A system that generates article recommendations and implements a Retrieval-Augmented Generation (RAG) pipeline for question answering using LangChain and HuggingFace models.

## Key Components

### 1. Data Preparation
- Loads articles from a CSV file
- Uses HuggingFace embeddings model: `sentence-transformers/all-MiniLM-L6-v2`
- Generates embeddings for each article
- Saves embeddings to a new CSV file

### 2. Recommendation System
- Implements cosine similarity between article embeddings
- Recommends similar articles based on content similarity
- Example output shows recommendations with similarity scores

### 3. RAG Pipeline
- Creates FAISS vector store for efficient similarity search
- Uses SmolLM-360M-Instruct model for text generation
- Implements a retrieval-augmented generation system that:
  - Retrieves relevant documents based on question
  - Creates context from retrieved documents
  - Generates responses using the language model

### 4. Question Answering
- Processes questions through the RAG pipeline
- Returns answers with source articles
- Example questions include:
  - "What is one of the main topics discussed in these articles?"
  - "Can you summarize the key findings?"
  - "Are there any recommendations or conclusions mentioned?"

## Implementation Details
- Uses LangChain's HuggingFacePipeline (with deprecation warning)
- Saves vector store and embeddings for later use
- Handles large embeddings (384 dimensions shown in output)

## Example Output
The system demonstrates:
1. Article recommendations based on content similarity
2. Question answering with retrieved context
3. Source attribution for generated answers

## Error Handling
- The output shows a KeyboardInterrupt error during execution
- This suggests the process was manually stopped during execution

## Files Generated
- `embeddings.csv`: Contains article embeddings
- `vector_store.pkl`: Serialized FAISS vector store
- `embeddings_and_texts.csv`: Combined embeddings and text data

## Note
The implementation uses deprecated LangChain components (HuggingFacePipeline) and would benefit from updating to newer versions of the library.
