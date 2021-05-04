const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // se encarga de buscar el archivo index.js


// crear el servidor
const app = express();

//conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar el body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// habilitar routing
app.use('/',routes());

//puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})