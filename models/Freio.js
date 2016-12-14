var mongoose = require('mongoose');

var FreioSchema = new mongoose.Schema({
    nome: String,
});

module.exports = mongoose.model('Freio', FreioSchema);
