# main.py
from fastapi import FastAPI, Request
from pydantic import BaseModel
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Define a Pydantic model for the lead data for validation
class Lead(BaseModel):
    name: str
    email: str
    phone: str
    instagram: str
    profession: str
    revenue: str
    purposeScore: int | None = None
    influenceScore: int | None = None
    archetypeKey: str | None = None
    archetypeTitle: str | None = None
    archetypeDescription: str | None = None
    foco_trabalho: int | None = None
    falar_trabalho: int | None = None
    objetivo_carreira: int | None = None
    captacao_clientes: int | None = None
    perfil_profissional: int | None = None
    percepcao_mercado: int | None = None

@app.get("/")
def read_root():
    """Root endpoint to check if the server is running."""
    return {"Status": "API is running"}

@app.post("/webhook")
async def receive_webhook(lead: Lead):
    """Endpoint to receive webhook data from the CRM."""
    try:
        logger.info(f"Received data: {lead.dict()}")
        # Here you can add logic to process the data, e.g., save to a database, etc.
        return {"status": "success", "data_received": lead.dict()}
    except Exception as e:
        logger.error(f"Error processing request: {e}")
        return {"status": "error", "message": str(e)}

# To run this application:
# 1. Navigate to the 'backend' directory in your terminal.
# 2. Run the command: venv/bin/uvicorn main:app --reload
