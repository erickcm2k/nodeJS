const express = require('express')
const response = require('../../network/response.js')
const controller = require('./controller.js')
const router = express.Router()

router.get('/', function(req, res) {

    console.log(req.headers)
    res.header({
        "custom-header": "Valor personalizado"
    })

    response.success(req, res, 'Lista de mensajes!', 201) // Llamando al módulo de response

})

router.post('/', function(req, res) {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, "Información inválida", 400, 'Error en el controlador')
        } )

})

module.exports = router