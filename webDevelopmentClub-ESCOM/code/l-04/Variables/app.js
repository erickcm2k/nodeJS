/*Configuración de variables de entorno, puertos, recursos*/

require('dotenv').config()

/******************************************/

/*Importación de modulos (Propios o Externos)*/

const express = require("express") //Importamos el middleware de express.js (node_modules)
const app = express(); //Indicamos que nuestra app funcionara bajo Express
const main_port = process.env.MAIN_PORT;

/******************************************/

/*Funciones y métodos HTTP con el cliente*/

app.get("/", function(req, res){ //Método HTTP-GET

    res.send("Variables de entorno"); //Este metodo cierra
    console.log(main_port);

});

/******************************************/

/*Lanzamiento de servidor y canales*/

app.listen(main_port);

/******************************************/