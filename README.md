# GifsApp - React (Giphy API)
Este proyecto es una aplicación sencilla desarrollada con React para practicar la integración de APIs externas, el manejo de hooks, peticiones HTTP y la gestión del estado. 
Forma parte del curso de React de Fernando Herrera.

El proyecto está disponible en la dirección: <https://buscador-de-gifs-anarogon.netlify.app/>

# Características principales

* Búsqueda de GIFs: Interfaz para buscar contenido multimedia utilizando la API de Giphy.

* Historial de búsquedas: Listado lateral que almacena las búsquedas recientes para un acceso rápido.

* Validaciones: Control de duplicados y campos vacíos en el buscador.

* Pruebas unitarias: Implementación de tests básicos con Vitest y React Testing Library.
  
## Pantalla general de la aplicación

Se trata de una aplicación sencilla que cuenta con una única pantalla desde donde se podrán buscar los gifs deseados desde una barra de búsqueda: 

![01](https://github.com/user-attachments/assets/89eb3bbc-3587-4a5c-ab93-b2e5b822ce6e)

## Tecnologías utilizadas

Para el desarrollo de esta aplicación se destaca: 
* **React 19 & Vite**: entorno de desarrollo y librería principal. 
* **TypeScript**: tipado estático para asegurar la integridad de los datos de la API.
* **Tailwind CSS**: Para el estilizado de la interfaz.
* **Vitest & Testing Library**: para el testing de componentes y hooks.

* ## ⚠️ ⚠️ Nota importante ⚠️ ⚠️:
  
Para que la aplicación funcione correctamente, es necesario configurar una API KEY de Giphy.
Crea un archivo llamado `.env` en la raíz del proyecto.
Añade la variable que encontarás en el archivo `.env.template`

** Puedes obtener una clave gratuita registrándote en Giphy Developers:** <https://developers.giphy.com/>
  
## Levantar desarrollo
1. Clonar el repositorio.
   ```
   git clone https://github.com/AnaRoGon/Gifs-App.git
3. Editar el archivo `.en` añadiendo las variables de entorno que encontramos en `.env.template` y añadir nuestra propia API KEY. 
5. Instalar las dependencias
   ```
   npm install   
7. Lanzar el servidor de desarrollo.
   ```
   npm run dev
