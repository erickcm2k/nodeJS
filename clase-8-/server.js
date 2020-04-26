const express = require('express') // equivalente a: import express from 'express' -- npm i express --
const router = express.Router() // Permite separar por cabeceras, métodos nuestras peticiones
const bodyParser = require('body-parser') // Permite trabajar de manera más cómoda con el body de la petición -- npm i body-parser --
const response = require('./network/response.js')

var app = express() 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false})) // bp para urlencoded
app.use(router) 

router.get('/', function(req, res) {
    console.log(req.headers)
    res.header({
        "custom-header": "Valor personalizado"
    })

    response.success(req, res, 'Lista de mensajes!', 201) // Llamando al módulo de response
})

router.post('/', function(req, res) {
    console.log(req.query) // Usada para acceder a los parámetros por query. Ejemplo: http://localhost:3000?orderBy=id&age=18
    console.log(req.body)
    if(req.query.error == 'ok') {
        response.error(req, res, "Error inesperado", 500, 'Solo una simulacion')
    } else {
        response.success(req, res, 'Creado correctamente', 201)
    }
})

app.use('/app', express.static('public')) // donde almacenar información de la aplicación.
app.listen(3000) 
console.log('Listening in port https://localhost:3000')