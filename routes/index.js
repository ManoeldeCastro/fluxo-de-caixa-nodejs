var express = require('express');
var router = express.Router();
const Caixa = require('../models/caixa.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const caixas = await Caixa.findAll();

    const valor_total = 200;
    const receitas = 100;
    const despesas = 100;
    const extrato = caixas;


    res.render('index', { valor_total, receitas, despesas, extrato });

  } catch (err) { 
    next(err);
  }
});

module.exports = router;
