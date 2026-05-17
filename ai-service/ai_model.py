import os

from dotenv import load_dotenv

from langchain_core.prompts import ChatPromptTemplate
from langchain_mistralai import ChatMistralAI

# Load environment variables
load_dotenv()


def ai_model(user_input, product_data):

    # Get API key
    mistral_api_key = os.getenv("MISTRAL_API_KEY")

    if not mistral_api_key:
        raise ValueError("MISTRAL_API_KEY not found")

    # Create LLM
    llm = ChatMistralAI(
        model="mistral-small-latest", api_key=mistral_api_key, temperature=0.7
    )

    # Prompt Template
    prompt = ChatPromptTemplate.from_template("""
        You are an intelligent AI shopping assistant.

        Product Information and it's Review in json:
        {product_data}

        User Question:
        {user_input}

        Give helpful, short, and accurate shopping advice.
        """)

    # Create Chain
    chain = prompt | llm

    # Invoke chain
    response = chain.invoke({"product_data": product_data, "user_input": user_input})

    return response.content
