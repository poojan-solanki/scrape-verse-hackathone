# ==============================================================================
# Ultra-Fast, Lightweight Multi-Stage Dockerfile for Railway Deployments
# Powered by Astral `uv` and Node.js Vite Build Engine
# ==============================================================================

# --- Stage 1: Frontend Asset Compilation ---
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install --no-audit --no-fund

COPY frontend/ ./
RUN npm run build

# --- Stage 2: Production Python Runtime with `uv` ---
FROM python:3.12-slim AS runner

# Import static `uv` binaries from official Astral image
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    UV_SYSTEM_PYTHON=1 \
    UV_COMPILE_BYTECODE=1 \
    PORT=8000

WORKDIR /app

# Install minimal Node runtime & Bright Data CLI for scraper triggers
RUN apt-get update && apt-get install -y --no-install-recommends \
    nodejs \
    npm \
    && npm install -g @brightdata/cli \
    && apt-get purge -y npm \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies at blazing speed using `uv`
COPY pyproject.toml requirements.txt* ./
RUN uv pip install --system -r pyproject.toml

# Copy backend codebase
COPY app/ ./app/
COPY main.py .

# Copy compiled React frontend assets from builder
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

EXPOSE 8000

# Dynamically bind to Railway's assigned PORT
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
