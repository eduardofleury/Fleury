var mongoose = require('mongoose');

var CarroSchema = new mongoose.Schema({
    cor: String,
    modelo: String,
    ano: Number,
    placa: String,
    revisao: Number
});

module.exports = mongoose.model('Carro', CarroSchema);
