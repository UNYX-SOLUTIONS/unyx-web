#!/bin/bash

set -e

PROJECT_DIR="/docker/unyx-web"
FRONTEND_DIR="$PROJECT_DIR/frontend"

echo ""
echo "======================================"
echo " UNYX Solutions - Deploy producción"
echo "======================================"
echo ""


# ==========================================
# 1. ACTUALIZAR REPOSITORIO
# ==========================================

echo "[1/5] Actualizando repositorio..."

cd "$PROJECT_DIR"

git pull origin main

echo ""
echo "Repositorio actualizado."


# ==========================================
# 2. VALIDAR DOCKER COMPOSE
# ==========================================

echo ""
echo "[2/5] Validando Docker Compose..."

cd "$FRONTEND_DIR"

docker compose config > /dev/null

echo "Docker Compose válido."


# ==========================================
# 3. BUILD + DEPLOY
# ==========================================

echo ""
echo "[3/5] Reconstruyendo UNYX Web..."

docker compose up -d --build

echo ""
echo "Contenedor actualizado."


# ==========================================
# 4. LIMPIEZA
# ==========================================

echo ""
echo "[4/5] Limpiando imágenes Docker antiguas..."

docker image prune -f


# ==========================================
# 5. ESTADO
# ==========================================

echo ""
echo "[5/5] Estado final..."
echo ""

docker compose ps

echo ""
echo "--------------------------------------"

docker ps \
  --filter "name=unyx-web" \
  --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "======================================"
echo " Deploy UNYX terminado"
echo "======================================"
echo ""