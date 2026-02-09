# 🔥 PIFIS - Birriería y Taquería Landing Page

Landing page moderna y atractiva para PIFIS, birriería y taquería ubicada en Chihuahua.

## 🚀 Características

- ⚛️ React 18 + Vite
- 🎨 Tailwind CSS + DaisyUI
- 📱 Diseño Responsive (Mobile-first)
- 🗺️ Integración con Google Maps
- 🔥 Animaciones y efectos personalizados
- ⚡ Optimizado para producción

## 📋 Requisitos

- Node.js 18 o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🐳 Deploy con Docker

```bash
# Construir imagen
docker build -t pifis-landing .

# Ejecutar contenedor
docker run -p 8080:8080 pifis-landing
```

## 🚂 Deploy en Railway

### Configuración Rápida:

1. **Conecta tu repositorio de GitHub con Railway**
2. **Railway detectará automáticamente el Dockerfile**
3. **Configuración del Puerto:**
   - Railway asigna automáticamente una variable `PORT`
   - La aplicación escucha en el puerto **8080** por defecto
   - El script `start.sh` se adapta automáticamente al puerto de Railway

### Variables de Entorno (Opcional):
No se requieren variables de entorno adicionales para el funcionamiento básico.

### Usando Railway CLI:

```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### 🔧 Configuración de Puerto en Railway:

**La aplicación está configurada para:**
- Puerto por defecto: **8080**
- Puerto dinámico: Usa la variable `$PORT` de Railway automáticamente
- No necesitas configurar nada manualmente

Si Railway te pregunta por el puerto, indicate: **8080** o deja que lo detecte automáticamente.

### 📡 Generar Dominio de Prueba:

1. Ve a tu proyecto en Railway
2. Click en "Settings" > "Public Networking"
3. Click en "Generate Domain"
4. Railway generará un dominio tipo: `tu-app.up.railway.app`
5. ¡Listo! Tu sitio estará accesible en segundos


## 📍 Información del Negocio

- **Nombre:** PIFIS - Birriería y Taquería
- **Ubicación:** Calle Hidalgo #6906, Col. Robinson, Chihuahua
- **Horario:** Lun-Dom 7:00 AM - 3:00 PM
- **Redes Sociales:**
  - Facebook: @PIFISt&b
  - Instagram: @pifist.b
  - TikTok: @pifis.tb

## 🎨 Tecnologías Utilizadas

- React
- Vite
- Tailwind CSS
- DaisyUI
- Lucide React (iconos)
- Nginx (producción)

## 📄 Licencia

© 2026 PIFIS - Birriería y Taquería. Todos los derechos reservados.
