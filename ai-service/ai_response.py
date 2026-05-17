from ai_model import ai_model

def generate_response(user_input, product_data):
    
    ai_response = ai_model(user_input, product_data)
    
    return ai_response
  