# Templete para el proyecto “Veterinaria”

Aquí se presentarán las reglas y la estructura de archivos, donde se explicaran cada una de las partes del templete así como las formas en la que se puede correr el archivo

## Iniciando

Para la instalación del templete:

```bash
git clone https://github.com/DiegoPonzio/templete-front.git
```

Para la instalación de paquetes:
```bash
npm i --save
# o
yarn add
```

Para la ejecución del proyecto en modo de desarrollo se hará con:

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver tus resultados.
Puedes empezar a editar tu Código en `src/App.jsx`. Esta se actualizará al mismo tiempo que editas

## Carpetas
Dentro del templete existen varias carpetas la cuales cumplen distintas funciones:
### public
Esta contendrá los logotipos e imágenes que se pondrán dentro del `index.html`
### src
Esta contendrá la lógica y las partes más importantes de nuestro proyecto como:
- assets, este contara con toda la media que nuestros componentes necesitarán.
- components, esta contara con nuestros componentes los cuales tendrán que se las partes de nuestro Código lo más atómicas posible
- lib, esta contara con todos los pequeños recursos los cuales ayudaran a atomizar los componentes. Esta carpeta es donde nuestras validaciones, contextos, hooks, etc.
- pages, en esta sección es donde nosotros crearemos nuestros archivos que serán nuestras páginas.
- services, en este apartado es donde guardaremos nuestras peticiones a back, esta contendrá los manejadores `getNombreAObtener`
- `App.jsx`, esta será nuestra main page.
- `main.jsx`, este constara con nuestro manejador de rutas "RouterProvider" donde se especificaran las diversas rutas, así como las reglas generales o los contextos que englobaran a todo nuestro programa

### Rutas 
Para movernos entre rutas de la pagina ocuparemos <Link>
```bash
import { Link } from 'react-router-dom';

<Link to='/' >main</Link>
```