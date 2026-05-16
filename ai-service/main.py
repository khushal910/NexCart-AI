from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

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


@app.get("/")
def home():
    return {"message": "FastAPI backend running successfully!"}


@app.post("/chat")
def chat(data: ChatRequest):

    user_message = data.message

    # Temporary AI response
    return {"reply": f"You said: {user_message}"}
