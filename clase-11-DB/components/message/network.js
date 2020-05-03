const express = require('express')
const response = require('../../network/response.js')
const controller = require('./controller.js')
const router = express.Router()

router.get('/', function(req, res) {
    controller.getMessages()
    .then((messageList) => {
        response.success(req,res,messageList,200)
    })
    .catch(e => {
        response.error(res,res,'Unexpected error', 500, e)
     })
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