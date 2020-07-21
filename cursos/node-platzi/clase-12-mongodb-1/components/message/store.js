// Almacenando en base de datos
const db = require('mongoose')
const Model = require('./model.js')

db.Promise = global.Promise
db.connect('mongodb+srv://erickce40:cometota@telegram-vnaud.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
console.log('[db] conectada con exito')

function addMessage(message){
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(){
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    get: getMessages
}