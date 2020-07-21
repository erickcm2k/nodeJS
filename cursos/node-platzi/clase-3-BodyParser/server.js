const express = require('express') // equivalente a: import express from 'express' -- npm i express --
const router = express.Router() // Permite separar por cabeceras, métodos nuestras peticiones
const bodyParser = require('body-parser') // Permite trabajar de manera más cómoda con el body de la petición -- npm i body-parser --


var app = express() // Creates an Express application
app.use(bodyParser.json()) // Llamar al body-parser para que sólo reciba archivos JSON
app.use(bodyParser.urlencoded({extended: false})) // bp para urlencoded
app.use(router) // Forma de mandar a llamar al router

// Router se encargará de administrar las peticiones
router.get('/', function(req, res) {
    res.send('Hello World - from GET -')
})

router.post('/', function(req, res) {
    res.send('Hello World - from POST -')
})

router.delete('/', function(req, res) {
    console.log(req.query) // Usada para acceder a los parámetros por query. Ejemplo: http://localhost:3000?orderBy=id&age=18
    console.log(req.body)
    //res.send('Something has been deleted!')
    res.send(`Mensaje = ${req.body.text}`)
})


// app.use('/', function(req, res) { // Para cualquier ruta ejecuta lo siguiente
//     res.send('Hello World!!!')
// })

app.listen(3000) // Seleccionar el puerto de escucha
console.log('Listening in port https://localhost:3000')
