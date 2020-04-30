const express = require('express') // equivalente a: import express from 'express' -- npm i express --
const router = require('./network/routes.js') // Permite separar por cabeceras, métodos nuestras peticiones
const bodyParser = require('body-parser') // Permite trabajar de manera más cómoda con el body de la petición -- npm i body-parser --

var app = express() 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false})) // bp para urlencoded
// app.use(router) 

router(app)

app.use('/app', express.static('public')) // donde almacenar información de la aplicación.
app.listen(3000) 
console.log('Listening in port https://localhost:3000')