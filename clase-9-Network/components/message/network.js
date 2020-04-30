const express = require('express')
const router = express.Router()
const response = require('../../network/response.js')

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

module.exports = router