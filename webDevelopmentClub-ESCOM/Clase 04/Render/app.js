/*Configuración de variables de entorno, puertos, recursos*/

require('dotenv').config();

/******************************************/

/*Importación de modulos (Propios o Externos)*/

const express = require("express") //Importamos el middleware de express.js (node_modules)
const app = express(); //Indicamos que nuestra app funcionara bajo Express
const main_port = process.env.MAIN_PORT;

/******************************************/

/*Configuración de routing o views*/

app.set('views', './views'); 
app.set('view engine', 'pug'); //Especificamos que utilizaremos un motor de vistas en este caso PUG

/******************************************/

/*Funciones y métodos HTTP con el cliente*/

app.get("/", function(req, res){ //Método HTTP-GET

    res.render('index', { title: 'Ejemplo de Vistas', head: 'Encabezado', texto: 'Aqui se renderizo una vista'});

});

/******************************************/

/*Lanzamiento de servidor y canales*/

app.listen(main_port);

/******************************************/