### Paso 01 Clonar el Codigo : ingrese a la terminal bach e ingrese los comando de terminal
````
git clone https://github.com/fyevenes/PruebaTecnicaCarsales.git
````
### Paso 02 Elegir el carpeta
inicie por la carpeta api es la que tiene el servicio que conecta al a informacion
* api
### Paso 03 un vez posicionado en la carpeta raiz api debe compilar el codigo en la terminal 
````
dotnet restore
dotnet build
dotnet rub
````
una vez el servicio back en levantado aparecera en la terminal la frace en verde
Build succeded
### Paso 04 probar metodos metodos Http o Https (GET)
hay 2 metodos esta puede cambiar si ya tiene la certificacion cambia la url de coneccion al ser publicada 
### paginacion
   * http://localhost:5083/api/episodes?page=1
   * https://localhost:7007/api/episodes?page=3
### search
   * http://localhost:5083/api/episodes/search?query=rick
   * https://localhost:7007/api/episodes/search?query=morty

### Paso 05 elegir el projecto Web
inicie por la carpeta web esta tiene la palicacion angular
 * web\WebCarSales
### Paso 06 un vez posicionado en la carpeta raiz web\WebCarSales debe compilar el codigo en la terminal 
````
ng serve
````
### Paso 07 este en la terminal indicara una URL de la aplicacion Angular
* http://localhost:4200/

