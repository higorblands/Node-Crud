var express = require('express');
var router = express.Router();

  /* insert Banco de Dados*/
  router.post('/', function(req, res, next) {
    res.redirect('/?new=true')
  });

  
  module.exports = router;