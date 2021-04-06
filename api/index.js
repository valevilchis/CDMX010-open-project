'use strict'

let mongoose = require('mongoose');
let mongoConnectionString = 'mongodb://localhost:27017/red_social';

mongoose.Promise = global.Promise;
mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("La conexion a MongoDB-Red Social, fue exitosa.")
    })
    .catch(error => console.log(error));