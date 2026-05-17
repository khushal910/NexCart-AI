from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from ai_response import generate_response

app = FastAPI()
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_methods=["*"],
  allow_headers=["*"],
)

# Request body model
class ChatRequest(BaseModel):
    message: str
    product: object

@app.get("/")
def home():
    return {"message": "FastAPI backend running successfully!"}


@app.post("/chat")  
def chat(data: ChatRequest):

    user_message = data.message
    product_data = data.product
    
    ai_response = generate_response(user_message, product_data)
    
    return {"reply": ai_response}
