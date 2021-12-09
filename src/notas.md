# Notas variados sobre el video de JSDOC


## Templates JSDOC

**jsdoc** nos da una plantilla definida para mostrar nuestra documentacion, pero tambin podemos manipular la pagina
para poder mostrar la documentacion un poco mas estetico y entendible. Una de las forma es por medio de plantillas ya generadas.
Hay muchas paginas que proveen de plantillas ya realizas por terceros una de ellos es  [Plantillas](https://cancerberosgx.github.io/jsdoc-templates-demo/demo/ "Esto es una pagina con plantillas para JSDOC")

**Proceso de instalacion de una template**
Primero se tiene que dirigir al repositorio de la plantilla elegido e intalar en el proyecto, 
Despues procede leer las instrucciones que el repositorio proporsiona.



## TUTORIAL


Para poder crear un tutorial donde colocamos un ejemploo de ayuda aquien este viendo nuestro codigo, primero 
creamos una carpeta llamado tutorial y lo definimos en nuestro *jsdoc.json* en donde definimos la ruta de carpeta.
Y adentro podemos crear su propio archivo *.json* en donde podemos definir la configuracion de nuestro tutorial, como por ejemplo
cambiar el nombre de cada uno de los temas. 
Y de la misma manera que los links, nuestro tutorial puede ser enlazado desde otras partes de nuestra documentación.
Para mas informacion y uso ir a la documentación oficial. [jsdoc.tutorial](https://jsdoc.app/tags-tutorial.html)


## HOME

Para poder agregar o mejorar la pagina de inicio, se puede hacer de diferentes maneras, una de ellas es por medio de un archivo 
*README.md* que se crea en la raiz del proycto.
Pero para ello tambien tenemos se tiene que definir en el archivo de configuracion *jsdoc.json*.

## PLUGINS
Hasta este momento se ha podido documentar el codigo del proyecto, pero por ejemplo si queremos documentar nuestros APIS entonces 
se llegara a necesitar alguna herramienta externa para poder realizar ese labor de una manera mas sencilla.
Una de las maneras es ir a la pagina oficial para crear plugins [jsdoc.pluggins](https://jsdoc.app/about-plugins.html "Esta es la documentacion oficial para los pluggins").
Una vez instalado el plugin simplemente procede agregarlo en nuestro *jsdoc.json*
Y por ultimo para ultilizarlo no queda mas que leer la documentaciond del plugin para poder utilizarlo.

## DEPLOY

La carpeta de **doc** que hemos creado, lo podemos compartir en un hostin compartido, etc y no hay problema con eso.
Porque al final es como una pagina web simple, con html, css y js.



