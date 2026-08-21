from fastapi import APIRouter
from app.apis.jnpt_api import router as jnpt_router
from app.apis.mundra_api import router as mundra_router

routes = APIRouter(prefix="/port", tags=["Ports"])

# Mount individual port routes
routes.include_router(jnpt_router)
routes.include_router(mundra_router)
