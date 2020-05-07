const express = require('express') // equivalente a la línea de abajo
// import express from 'express'

// npm i express
var app = express() // Creates an Express application

app.use('/', function(req, res) { // Para cualquier ruta ejecuta lo siguiente
    res.send('Hello World!!!')    // Permite cualquier método HTTP
})

app.listen(3000) // Seleccionar el puerto de escucha
console.log('Listening in port https://localhost:3000')