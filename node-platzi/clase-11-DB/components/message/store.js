// Almacenando en base de datos
const list = [] // Lista de mensajes

function addMessage(message){
    list.push(message)
}

function getMessages(){
    return list
}

module.exports = {
    add: addMessage,
    get: getMessages
}