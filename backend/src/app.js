const express = require('express');
const cors = require('cors');
const app = express();



//Settings
app.set('port', process.env.PORT || 3000);

//-- middlewares de la cabecera
app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
})
//app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routers
app.use('/api/users', require('./router/users'));
app.use('/api/notes', require('./router/notes'));





module.exports = app;