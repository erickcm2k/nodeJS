const validator = require('validator')
const myNotes = require('./util')

const msg = myNotes()
console.log(validator.isPort('8080'))
