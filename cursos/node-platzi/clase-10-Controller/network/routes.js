const express = require('express')
const message = require('../components/message/network.js')

const routes = function(server) {
    server.use('/message', message)
}

module.exports = routes