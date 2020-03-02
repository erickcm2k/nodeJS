/* importa paquetes
 esta linea es lo mismo que utilizar: import express from 'express';*/
const express = require('express');

/* Módulo de express
    permite trabajar con el body de la peticion 
    de una manera más sencilla
*/
const bodyParser = require('body-parser'); 

const router = express.Router(); // Permite separar las peticiones

var app = express(); // Inicializa nuestro express


app.use(router); 
app.use(bodyParser);

router.get('/', function(req, res){
    res.send("Hola desde get");
});

router.post('/', function(req, res){
    res.send("Hola desde post");
});

// app.use('/', function(req, res) // parámetros request y response 
// {
//     res.send('Hello World'); // Se envia algo usando response
// });

app.listen(8080); // Seleccionamos el puerto del localhost donde queremos que se ejecute el servidor
console.log('La app esta escuchando en http://localhost:8080');