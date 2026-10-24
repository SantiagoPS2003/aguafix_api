# --- Etapa de Construcción ---
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código fuente y compilar
COPY . .
RUN npm run build

# --- Etapa de Ejecución Limpia ---
FROM node:22-alpine

WORKDIR /usr/src/app

# Copiar archivos esenciales y la compilación de producción
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /usr/src/app/dist ./dist

# Puerto expuesto por la API
EXPOSE 3000

# Ejecutar la aplicación compilada
CMD ["node", "dist/main"]