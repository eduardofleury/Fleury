var mongoose = require('mongoose');

var TimeSchema = new mongoose.Schema({
    nome: String,
    tecnico: String,
    anoFundacao: Number,
    qtdJogadores: Number,
    qtdTorcedores: Number,
    qtdTitulos: Number
});

module.exports = mongoose.model('Time', TimeSchema);
