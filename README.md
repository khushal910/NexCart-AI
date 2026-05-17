# NexCart AI 🚀

NexCart AI is an AI-enhanced multi-vendor e-commerce platform built by extending the open-source GoCart project.

The project integrates an intelligent AI shopping assistant directly into product pages, allowing users to ask contextual questions about products, reviews, ratings, and recommendations in natural language.

---

# 🎥 Demo Video

[▶ Watch Demo Video](./assets/chat_demo.mp4)

## 🔥 What I Built

I forked the original GoCart project and implemented:

- AI-powered product chat assistant
- Context-aware product Q&A
- Review and rating summarization
- Natural language shopping guidance
- LangChain + Mistral AI integration
- FastAPI backend for AI communication

The assistant can answer questions like:

- "Is this product good?"
- "What are the best reviews?"
- "What are the drawbacks?"
- "Is this worth buying?"
- "Summarize customer feedback"

---

# 🧠 AI Architecture

## Current AI Flow

```text
User Question
      ↓
Frontend Chat UI
      ↓
FastAPI Backend
      ↓
LangChain Prompt Pipeline
      ↓
Mistral AI
      ↓
AI Response
```

The backend sends:

- Product information
- Ratings
- Reviews
- User query

directly to the LLM as structured context.

---

# ❓ Why I Did NOT Use RAG / Embeddings / Vector Database

This project currently focuses on **single-product conversational assistance**.

Because product data is already:
- small
- structured
- immediately available
- within LLM context limits

using:
- embeddings
- chunking
- vector databases

would introduce unnecessary complexity and latency.

Instead, the system directly injects product JSON into the prompt, which provides:
- lower latency
- simpler architecture
- easier debugging
- reduced infrastructure overhead
- faster development iteration

This is a deliberate engineering decision based on the current problem scope.

---

# 🛠️ Tech Stack

## Frontend
- Next.js
- React
- Tailwind CSS

## Backend
- FastAPI
- Python
- LangChain

## AI
- Mistral AI
- Prompt Engineering

---

# 🚀 Future Improvements

Planned future upgrades include:

- Conversation memory
- Streaming AI responses
- Semantic product search
- Multi-product comparison
- Personalized recommendations
- RAG-based large catalog retrieval
- AI shopping agents

---

# 📸 Features

- Multi-vendor ecommerce platform
- Product management
- Vendor dashboard
- AI shopping assistant
- Review-aware recommendations
- Conversational shopping experience

---

# ⚡ Example Questions

```text
What is the best review for this product?
Is this product durable?
Summarize negative reviews.
Is this good value for money?
```

---

# 📚 Base Project

This project extends the open-source GoCart platform:

https://github.com/GreatStackDev/gocart

---

# 🧪 Running the Project

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

---

# 🔑 Environment Variables

Create a `.env` file:

```env
MISTRAL_API_KEY=your_api_key
```

---

# 🎯 Project Goal

The goal of NexCart AI is to explore how conversational AI can improve ecommerce product discovery and purchasing decisions through contextual, real-time shopping assistance.

---

# 📄 License

This project follows the original GoCart license.