const mongoose = require('mongoose');
const mongo = require('mongodb');
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mobi-challenge';
const Schema = mongoose.Schema;

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const database = mongoose.connection;

database.on('connected', function(){
    console.log('Mongoose: banco de dados conectado em ' + url);
})

database.on('error', function(err){
    console.error('Mongoose: erro ao tentar a conexão: ' + err);
})

module.exports = mongoose;

