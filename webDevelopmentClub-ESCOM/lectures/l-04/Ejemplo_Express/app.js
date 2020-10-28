const express = require("express") //Importamos el middleware de express.js (node_modules)
const app = express(); //Indicamos que nuestra app funcionara bajo Express

app.get("/", function(req, res){ //Método HTTP-GET

    res.send("Hola Mundo"); //Este metodo cierra

});

app.listen(8080);