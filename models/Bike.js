var mongoose = require('mongoose');

var BikeSchema = new mongoose.Schema({
    cor: String,
    modelo: String,
    ano: Number,
    quadro: String,
    revisao: Number,
    freio: String
});

module.exports = mongoose.model('Bike', BikeSchema);
