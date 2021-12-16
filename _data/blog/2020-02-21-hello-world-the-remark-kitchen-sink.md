---
template: BlogPost
path: /Gatsby-Netlify-Nerdojo
date: 2020-02-25T04:00:25.364Z
title: Gatsby + Netlify = Nerdojo
metaDescription: 'Gatsby, Netlify, desarrollo web, headless cms'
thumbnail: /assets/post1-min.png
---
Bienvenido al Dojo!

¿Cómo va el inicio del año? Se que muchos estábamos esperando este 2021 con ansias después de lo “especial” (por no llamarlo de otra manera) que fue el 2020, mi nombre es Christian y desde varios meses venia planeando empezar un blog donde pueda compartir mis conocimientos, experiencias y opiniones sobre temas relacionados con la tecnología y videojuegos.

Durante varios días estuve pensando sobre que escribir en la primera entrada de Nerdojo y al final decidí explicar cómo fue construido el blog, el objetivo es conocer las tecnologías involucradas y demostrar lo fácil que puede ser montar un sitio web estático.

## Gatsbyjs

El frontend de Nerdojo está desarrollado con [Gatsbyjs](https://www.gatsbyjs.com), siendo un framework para construir sitios estáticos con React, Gatsby es una gran opción para iniciar proyectos de cualquier tipo, siendo una excelente opción para blog personales, sitios empresariales, sitios informativos y web apps. Una de las grandes ventajas de Gatsby es que con una simple línea de código (ver ejemplo en el paso 4) tienes una plantilla en la cual iniciar tu proyecto, a continuación detallo lo que se necesita para trabajar con Gatsbyjs.

**1-** **Instalar** [node.js](https://nodejs.org/en/download/releases/): necesitamos buscar versiones anteriores a la última ya que Gatsbyjs podría fallar en la versión más reciente, en mi caso instale la versión 10.23.1

**2-** **Instalar** [Git](https://git-scm.com/downloads): Descargamos la última versión disponible

**3-** **Instalar** Gatsby CLI: Teniendo instalado Node.js y Git, abrimos la consola y escribimos la siguiente instrucción

```
   npm install -g gatsby-cli
```

**4-** **Crear un sitio con Gatsby**: Nos movemos al directorio donde queremos guardar el sitio y finalmente ejecutamos la siguiente instrucción para crear nuestro primer sitio con gastby

```
   gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

![Directorio del proyecto Gaysby](/assets/2.png "Directorio del proyecto Gaysby")

Para este ejemplo se usó la plantilla inicial de gatsby, puedes buscar los templates disponibles en la siguiente url: <https://www.gatsbyjs.com/starters/?>

![Proyecto gatsby](/assets/3.png "Proyecto gatsby")

*Se puede observar la ruta donde fue almacenado el proyecto*

**5-** **Iniciar el servidor local para lanzar el sitio web**: Una vez creado el sitio basta con cambiar al directorio del proyecto y ejecutar el servidor con los comandos indicados en la consola

![Iniciando proyecto Gatsby](/assets/5.png "Iniciando proyecto Gatsby")

Ingresamos a la ruta indicada en la consola y podemos visualizar el sitio creado

![Servidor local Gatsby iniciado](/assets/6.png "Servidor local Gatsby iniciado")

![Sitio web Gatsby corriendo en servidor local](/assets/7.png "Sitio web Gatsby corriendo en servidor local")

## Netlify

Una excelente opción de host para sitios web estáticos creados con Gatsbyjs es [Netlify](https://www.netlify.com), Nerdojo esta hospedado en Netlify y utiliza su Headless CMS para administrar el contenido, gracias a su continuous development con unos simples pasos podemos tener nuestro sitio web online rápidamente. En este ejemplo usaremos el proyecto creado anteriormente y explicaremos lo fácil que es hospedar nuestros sitios en Netlify

**1- Crear un nuevo repositorio** [Git](https://github.com/new)

![Creando repositorio en Github](/assets/8.png "Creando repositorio en Github")

**2-** **Inicializar nuestro directorio local como repositorio Git**, para esto abrimos nuestro proyecto con cualquier editor de texto, en este ejemplo usamos Visual Studio Code y su consola integrada para ejecutar los comandos Git

Estando en la raíz del proyecto iniciamos Git con el siguiente comando

```
git init
```

![Proyecto Gatsby en Visual Studio Code](/assets/9.png "Proyecto Gatsby en Visual Studio Code")

**3-** **Agregamos todos los cambios a nuestro repositorio local**, ejecutamos el siguiente comando

```
git add .
```

**4-** Confirmamos los cambios con el siguiente comando

```
git commit -m 'Primer commit'
```

**5-** **Añadimos nuestro repositorio Git creado en el paso 1**, copiamos la URL del repo

![Copiando link de repositorio de Github](/assets/10.png "Copiando link de repositorio de Github")

Escribimos el siguiente comando añadiendo la URL copiada

```
git remote add origin https://github.com/christianEdsv/hello-world.git
```

**6-** **Publicamos los cambios del repositorio local a Github**, ejecutamos el siguiente comando

```
git push -u origin master
```

Ingresamos a nuestro repositorio en Github para validar que los archivos que fueron instalados

![Proyecto Gatsby en Github](/assets/11.png "Proyecto Gatsby en Github")

## Conectando Github con Netlify

Para realizar la integración necesitamos tener una cuenta en [Netlify](https://www.netlify.com), podemos usar nuestra cuenta de Github o crear una nueva con nuestro correo. Una vez tengamos lista nuestra cuenta basta seguir los siguiente pasos para hacer la integración.

**1-** **Hacemos click en el botón New site from Git**

![Nuevo sitio con Git desde Netlify](/assets/12.png "Nuevo sitio con Git desde Netlify")

**2- Seleccionamos el repositorio Git que creamos anteriormente**

![Seleccionando el repositorio en Netlify](/assets/13.png "Seleccionando el repositorio en Netlify")

**3- Finalmente presionamos el botón Deploy site**

![Creando el sitio desde Github en Netlify](/assets/14.png "Creando el sitio desde Github en Netlify")

Esperamos que termine el deploy y cambiamos el nombre del dominio que Netlify proporciona por default presionando el botón Domain settings

![Opciones de dominio en Netlify](/assets/15.png "Opciones de dominio en Netlify")

Buscamos en la lista Options – Edit site name para cambiar el nombre del dominio

![Cambiando dominio personalizado en Netlify](/assets/16.png "Cambiando dominio personalizado en Netlify")

Felicidades 😊 ya tienes un sitio web desarrollado con Gatsbyjs integrado con Github y netlify!

Muchas gracias por llegar hasta el final de este mini tutorial, la intención era explicar como fue construido Nerdojo y mostrar lo sencillo y rápido que puede ser tener un proyecto web online gracias a Gatsby y Netlify, si tienes alguna pregunta o sugerencia puedes escribirme a mi [Twitter](https://twitter.com/christianEdSV)

Nos vemos pronto ✌
