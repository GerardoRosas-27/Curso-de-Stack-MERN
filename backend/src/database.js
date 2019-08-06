const mongoose = require('mongoose');
//importar la ruta de coneccion desde un archivo de variables de entorno
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/databasetest';
mongoose.connect(URI, {
     useNewUrlParser: true,
     useCreateIndex: true
})

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('Base de datos conectada');
})