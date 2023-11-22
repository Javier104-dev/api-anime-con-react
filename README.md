<h1 align='center'>Api anime con React</h1>

### Introducción
Primer proyecto usando `React`, se utilizó para crear una página que consume una API de código abierto que contiene información de series, películas y todo lo relacionado con anime.

Se utilizan `useState` para controlar el input de búsqueda, `useReducer` para manejar el flujo de datos que utiliza la página y `useContext` para crear el caché junto al Local Storage, lo que reduce los tiempos de carga y las peticiones innecesarias a la API.

### Rutas
| Ruta                                | Explicación                                                            |
| ----------------------------------- | ---------------------------------------------------------------------- |
| http://localhost:3000               | Ruta home por defecto, muestra los resultados de búsqueda              |
| http://localhost:3000/anime/:id/ver | Muestra de forma detallada las características de una serie o película |

### Especificaciones
- Servidor: http://localhost:3000
- Api utilizada: https://api.jikan.moe/v4
- Versión: 1.0.0
- Autor: Javier Anibal Villca
- Repositorio GitHub: git+https://github.com/Javier104-dev/api-anime-con-react.git

### Tecnologías utilizadas
- **Node.js v18.16.0:** Plataforma de ejecución de JavaScript del lado del servidor.
- **ESLint:** Herramienta de linting para mantener un código JavaScript/Node.js consistente y legible.
- **Create React App:** Herramienta que facilita el desarrollo de aplicaciones `React`.

<h2 align='center'>Instrucciones de instalación</h2>

### Requerimientos:
- IDE - Visual Studio Code v1.84.2
- Git v2.43.0
- Node.js v20.9.0

### Preparando el ambiente:
- Descargar o clonar el repositorio.
- Abrir la consola y correr el comando `npm install` para descargar las dependencias requeridas.
- Usar el comando `npm start` para iniciar el servidor, por defecto se abrirá `http://localhost:3000` en una ventana del navegador.

<h2 align='center'>Lo que encontrarás</h2>

### Página principal
<p align='left'>
  <img
    alt='Página principal'
    src='https://github.com/Javier104-dev/api-anime-con-react/assets/105408069/e4cc2969-2296-4870-819c-d66cc5dad9e5'
  >
</p>
<br>

### Ver detalles
<p align='left'>
  <img
    alt='Ver detalles'
    src='https://github.com/Javier104-dev/api-anime-con-react/assets/105408069/d6d55141-65db-42a8-8d65-45dff304f435'
  >
</p>
<br>

---

### Autor:
| [<img src='https://avatars.githubusercontent.com/u/105408069?v=4' width=115><br><sub>Javier Anibal Villca</sub>](https://github.com/Javier104-dev) |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |