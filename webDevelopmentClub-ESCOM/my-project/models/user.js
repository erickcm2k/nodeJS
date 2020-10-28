const mongoose = require('mongoose');

const { Schema } = mongoose;
const DB = process.env.MONGODB_NODE;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new Schema({
  Nombre: { type: String, maxlength: [10, 'Máximo 10 caracteres'] },
  Password: { type: String, minlength: [5, 'Minimo 5 caracteres'] },
  Email: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;
