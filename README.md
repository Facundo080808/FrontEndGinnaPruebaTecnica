# FrontEndGinnaPruebaTecnica

Este es el proyecto frontend para la prueba técnica de Ginna. Está desarrollado con React y está configurado para interactuar con una API backend.

## Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu máquina. Si no lo tienes, puedes descargarlo desde el sitio oficial.

## Instalación

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/Facundo080808/FrontEndGinnaPruebaTecnica.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd FrontEndGinnaPruebaTecnica
    ```

3. Instala las dependencias necesarias con `npm`:

    ```bash
    npm install
    ```

## Configuración

Para que las peticiones a la API funcionen correctamente, necesitas configurar la variable de entorno `REACT_APP_SERVER_URL`. Esta variable debe tener la URL de la API a la que deseas hacer las peticiones.

1. Crea un archivo `.env` en la raíz del proyecto (si no existe ya) y agrega la siguiente línea:

    ```bash
    REACT_APP_SERVER_URL=https://api-ginna-prueba-tecnica.onrender.com/api
    ```

    **Nota**: Cambia la URL si estás utilizando una API en local.

## Iniciar el Proyecto

Una vez que hayas instalado las dependencias y configurado la variable de entorno, puedes iniciar la aplicación con el siguiente comando:

```bash
npm start
