const store = require('./store.js')

function addMessage(user, message) {

    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('[messageController] no hay user o message.')
            reject('Los datos son incorrectos.')
            return false
        }  
        
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }

        store.add(fullMessage)

        resolve(fullMessage)
        console.log(fullMessage)
    })

}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.get())
    })
}

module.exports = {
    addMessage,
    getMessages
}