<!-- 

//@ts-check 
Cuando agregamos la linea que esta arriba, lo que hace el editor es tomar algunas caracteristicas de typescript
para que pueda marcarnos error en base a la declaraciones que definamos en los comentarios que utilizamos
para crear la documentacion de nuestro codigo en javascript.
Pero en las nuevas versiones de VSC ya te da la opcion de poder activar la caracteristica sin necesidad de agregar el decorador.


-->



# Notas de tutorial JSDOC




**plugins** : EN este arreglo es para poder agregar todos los plugins que uno requiera de forma externa. 


**"includePattern" :".js$"** : Aqui se le esta indicando que va a leer todos los tipos de archivo que terminen con .js

**"excludePattern" : "(node_modules|docs)"** : Aqui estamos excluyendo todos los archivos que se encuentran en la carpeta node_modules y tambien a la carpeta donde se guardara la documentacion generada.

**"templates":{}** : Es Para definir el formato que tendra nuestra documentación.

**"cleverLinks": true** : Para poder agregar links
**"monospaceLinks": true** : nose

**"recurse":"true"** : Aqui le indicamos que va a leer lo que tiene adentro de las carpetas y si tiene adentro mas carpetas entonces va a leer los docuemntos que tiene en su interior, asi sucesivamente.

**"destination": "./docs"** : Este es el destino donde se guardara nuestra docuemntación, le podemos asignar cualquier nombre.

**"template" : "myTemplate"** : Este parametro es para agregar la ruta del template que mostrara nuestra documentación

**"tutorials": "./tutorials"** : Para poder definir la ruta en donde se encontrar los tutoriales.

----
## Una vez que ya se ha instalado el paquete y creado el archivo de configuración, se procede a realizar lo siguiente


```
npx jsdoc -c jsdoc.json
```
**npmx** : Lo que hara es buscar en nuestra proyecto y buscara si tenemos instalado el jsdoc, si es asi ejecuta el comendo y nos crear una carpeta con los componentes de una pagina web. Que seria nuestra pagina de documentacion. Y no hay problema si lo eliminamos, ya que lo podemos generar cuantas veces querramos con tan solo ejecutar el comando. En incluso podemos agregar el comando en el Packege.json



















