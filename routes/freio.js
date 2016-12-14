var express = require('express');
var router = express.Router();

var Freio = require('../models/Freio.js');

/* GET /freio Listagem de perfis. */
router.get('/', function(req, res, next) {
  Freio.find(function (err, freio) {
    if (err) return next(err);
    res.json(freio);
  });
});

/* POST /freio Cadastro de freio */
router.post('/', function(req, res, next) {
  Freio.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /freio/id  Lista filtrada por um freio*/
router.get('/:id', function(req, res, next) {
  Freio.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /freio/:id Salva a edição de freio */
router.put('/:id', function(req, res, next) {
  Freio.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /freio/:id Deletando o freio a partir do id */
router.delete('/:id', function(req, res, next) {
  Freio.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
