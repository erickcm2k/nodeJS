const express = require('express') // equivalente a: import express from 'express'
const router = express.Router() // Permite separar por cabeceras, métodos nuestras peticiones

// npm i express
var app = express() // Creates an Express application
app.use(router) // Forma de mandar a llamar al router

// Router se encargará de administrar las peticiones
router.get('/', function(req, res) {
    res.send('Hello World - from GET -')
})

router.post('/', function(req, res) {
    res.send('Hello World - from POST -')
})

router.delete('/', function(req, res) {
    res.send('Something has been deleted!')
})


// app.use('/', function(req, res) { // Para cualquier ruta ejecuta lo siguiente
//     res.send('Hello World!!!')
// })

app.listen(3000) // Seleccionar el puerto de escucha
console.log('Listening in port https://localhost:3000')
