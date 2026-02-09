# Multi-stage build para optimizar tamaño de imagen

# Etapa 1: Build de la aplicación
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production && npm cache clean --force

# Copiar código fuente
COPY . .

# Build de producción
RUN npm run build

# Etapa 2: Servidor de producción con Nginx
FROM nginx:alpine

# Copiar archivos build al directorio de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto (Railway usa PORT env variable)
EXPOSE 8080

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
