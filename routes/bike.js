var express = require('express');
var router = express.Router();

var Bike = require('../models/Bike.js');

/* GET /bike Listagem de perfis. */
router.get('/', function(req, res, next) {
  Bike.find(function (err, bike) {
    if (err) return next(err);
    res.json(bike);
  });
});

/* POST /bike Cadastro de bike */
router.post('/', function(req, res, next) {
  Bike.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /bike/id  Lista filtrada por um bike*/
router.get('/:id', function(req, res, next) {
  Bike.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /bike/:id Salva a edição de bike */
router.put('/:id', function(req, res, next) {
  Bike.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /bike/:id Deletando o bike a partir do id */
router.delete('/:id', function(req, res, next) {
  Bike.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
