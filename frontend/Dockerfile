# ==========================================
# ETAPA 1: BUILD ASTRO
# ==========================================

FROM node:22-alpine AS builder

WORKDIR /app

# Habilitar Corepack para utilizar la versión
# de pnpm definida en package.json
RUN corepack enable

# Copiar primero archivos de dependencias
# para aprovechar la caché de Docker
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Instalar dependencias de forma reproducible
RUN pnpm install --frozen-lockfile

# Copiar proyecto
COPY . .

# Compilar Astro
RUN pnpm build


# ==========================================
# ETAPA 2: PRODUCCIÓN
# ==========================================

FROM nginx:alpine AS production

# Eliminar configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Configuración Nginx de UNYX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build generado por Astro
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]