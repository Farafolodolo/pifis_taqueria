#!/bin/sh

# Script para iniciar nginx con el puerto correcto de Railway
# Railway proporciona la variable de entorno PORT

# Si Railway proporciona PORT, úsala; si no, usa 8080 por defecto
PORT=${PORT:-8080}

# Reemplazar el puerto en la configuración de nginx
sed -i "s/listen 8080;/listen $PORT;/g" /etc/nginx/conf.d/default.conf

echo "Starting nginx on port $PORT..."

# Iniciar nginx
nginx -g "daemon off;"
