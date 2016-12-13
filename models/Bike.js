var mongoose = require('mongoose');

var BikeSchema = new mongoose.Schema({
    cor: String,
    modelo: String,
    preco: Number,
    quadro: String,
    revisao: Number,
    freio:{
  	 nome:String
    }
});

module.exports = mongoose.model('Bike', BikeSchema);
