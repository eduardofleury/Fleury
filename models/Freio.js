var mongoose = require('mongoose');

var FreioSchema = new mongoose.Schema({
    nome: String,
    codigo: String,
    preco: Number,
    dataEntrega: String
});

module.exports = mongoose.model('Freio', FreioSchema);
