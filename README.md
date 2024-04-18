# CaC-Fullstack-Node-Grupo10
Repositorio para el proyecto grupal del curso Full Stack en Node de Codo a Codo, Comisión 24126 Grupo N° 10


### Integrantes:
* Camila
* Hugo
* Marina
* Juan

Optimizar imagenes: tener una para cada corte del responsive

## Herramientas:

* Convertidor de logo a ICO: https://convertico.com/es/
* Analizador de HTML: https://validator.w3.org/

## Comandos de git básicos para trabajar

### Comandos para traer archivos

* git clone <dirección-del-repositorio>   Con este comando nos creamos una copia del proyecto en nuestra pc, dentro de la carpeta en la que estemos.
* git pull    Con este comando traemos las actualizaciones de los archivos que hayan modificado nuestros compañeros.

### Comandos para cargar archivos

* git add <nombre-de-archivo>     Agrega un archivo o modificación individual, el que le pasemos como parámetro, a los registros de git.
* git add .   Usando un punto en lugar del nombre de un archivo, se agregan a los registros de git todos los archivos y modificaciones nuevos.
* git commit -m "Descripcion de los cambios agregados".    Se debe crear una descripción de los cambios, a modo informativo y de seguimiento, antes de subir finalmente los archivos.
* git push origin main    Con este comando, actualizaremos los registros locales, con los del repositorio remoto, en este caso, GitHub. En ocaciones solo con ejecutar ```git push``` Es suficiente.

Entonces, subir y actualizar los archivos, es una secuencia de 3 pasos: 
- 1. git add .
- 2. git commit -m "Modificada tal cosa o agregada tal funcionalidad o reparado tal error"
- 3. git push

Consejo: SIEMPRE antes de empezar a trabar en el proyecto luego de un rato, y justo antes de hacer un push, ejecutar un ```git pull``` para traer los cambios que hayan podido ser subidos por otra persona mientras nosotros estabamos trabajando, esto para evitar conflictos o colisiones.