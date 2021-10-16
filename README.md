<p align='left'>
    <img width="150px"src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Giphy-logo.svg/320px-Giphy-logo.svg.png' </img>
</p>

<br />

# Gif finder

<p align="center">
  <img height="250" src="./imgs/start-screen.png" />
</p>

## Descripción

<p>Este proyecto trata de una SPA (Single Page Application), en la que se utiliza React, Redux, Express, y una API (<a href="https://developers.giphy.com/">giphy</a>) para obtener la info en la web principalmente. En la app se pueden hacer consultas a la API, guardar y remover de favoritos.</p>

## Dependencias y programas usados

<p>Durante el proyecto, se usaron las sigs tecnologías:</p>

- Node v12.21.0
- Npm v7.20.3
- Express v4.17.1
- Firefox 93.0
- Brave 1.30.87

<p>Y muchas más dependencias, consultar los package.json de la ruta <strong><a href="https://github.com/Fedex159/gif-finder/blob/main/api/package.json">/api</strong></a> y <strong><a href="https://github.com/Fedex159/gif-finder/blob/main/client/package.json">/client</strong></a> </p>

## Instrucciones para utilizar el proyecto

- Clonar o forkear el repositorio
- Obtener una api-key desde <a href="https://developers.giphy.com/docs/api#quick-start-guide">giphy</a>

### <u>Configurando el back</u>

Crear un archivo <strong>.env</strong> en la carpeta <strong>/api</strong> con los sigs parámetros:

```
API_KEY=api-key
```

Una vez realizado, ya puede realizar <strong> npm install </strong> en la carpeta <strong>API</strong>, para que se instalen todas las dependencias necesarias.

Para poner en línea el servidor, ejecutar <strong>npm start</strong> .

### <u>Configurando el Front</u>

Para el front no se requieren de configuraciones adicionales. Ejecutar <strong>npm install</strong> en la carpeta <strong>Client</strong> y luego <strong>npm start</strong> para poner en línea el servidor web.

<br />

## Presentación y funcionalidades

### <u>Principal</u>

<img  style="border-radius: 5px;" src="./imgs/principal.gif"/>

Pantalla principal de la app. Se muestran los 25 gifs que se encuentran en trending en el momento, botones de favoritos y trending, para cambiar entre módulo, barra de búsqueda, y botones con paleta de colores en la esquina izquierda superior.

<br />

### <u>Search</u>

<img  style="border-radius: 5px;" src="./imgs/search.gif"/>

Funcionalidad de búsqueda. Devuelve 25 resultados por búsqueda de la palabra ingresada. Se pueden agregar a favoritos.

<br />

### <u>Favoritos</u>

<img  style="border-radius: 5px;" src="./imgs/favoritos.gif"/>

Funcionalidad de favoritos. Se pueden guardar o quitar favoritos, tanto sea de trending como de los resultados de la búsqueda, no hay límite. Los favoritos se mantienen mientras se esté en la web, si se recarga se reinician.

<br />

### <u>Paleta de colores</u>

<img  style="border-radius: 5px;" src="./imgs/colores.gif"/>

Funcionalidad de colores. Se pueden seleccionar 3 tipos de paleta (Dark, White y Purple). El cambio se aplica a todos los elementos.

<br />

### <u>Responsive</u>

<img  style="border-radius: 5px;" src="./imgs/responsive.gif"/>

La web esta configurada para funcionar responsivamente.
