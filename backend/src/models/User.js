const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellidoPaterno: {
    type: String,
    required: true
  },
  apellidoMaterno: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  matricula: {
    type: String,
    required: true,
    unique: true
  }
}, {
    timestamps: true
  });

module.exports = userSchema;