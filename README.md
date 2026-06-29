# Geolocalizacion

Aplicación web sencilla para obtener y mostrar la ubicación del usuario usando la API de geolocalización del navegador.

## 🚀 ¿Qué hace este proyecto?

Este proyecto permite:

- Solicitar permiso de ubicación al usuario.
- Obtener coordenadas geográficas (**latitud** y **longitud**).
- Mostrar la ubicación actual en pantalla.
- Manejar errores comunes cuando la geolocalización falla o es rechazada.

## 🧩 Tecnologías usadas

- **JavaScript** (61%)
- **HTML** (39%)

## 📌 Funcionamiento

1. El usuario abre la aplicación en el navegador.
2. El navegador solicita permiso para acceder a la ubicación.
3. Si el usuario acepta, se obtienen las coordenadas mediante `navigator.geolocation`.
4. La app muestra la información de ubicación en la interfaz.
5. Si ocurre un error (permiso denegado, timeout, etc.), se muestra un mensaje informativo.

## ✅ Requisitos

- Navegador moderno con soporte para Geolocation API.
- Conexión segura (**HTTPS**) o entorno local (`localhost`) para permitir acceso a ubicación.

## ▶️ Cómo ejecutar el proyecto

### Opción 1: Abrir directamente

1. Clona este repositorio:
   ```bash
   git clone https://github.com/camachoo18/Geolocalizacion.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd Geolocalizacion
   ```
3. Abre el archivo `index.html` en tu navegador.

### Opción 2: Usar servidor local (recomendado)

Puedes usar una extensión como **Live Server** en VS Code o ejecutar un servidor local simple.

Ejemplo con Python:
```bash
python -m http.server 5500
```

Luego abre: `http://localhost:5500`

