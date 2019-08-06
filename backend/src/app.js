const express = require('express');
const cors = require('cors');
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routers
app.use('/api/users', require('./router/users'));
app.use('/api/notes', require('./router/notes'));





module.exports = app;