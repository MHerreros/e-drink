var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
var pedidos = [];
app.post('/drinks', function(req, res){
  console.log(req.body);

  var pedido = req.body.trago;
  pedidos.push(pedido);
  var response = "Estoy procesando el trago: " + pedido;
  res.json(response);
}
);

app.get('/drinks', function(req, res){
  console.log(req.body);

  var response = pedidos;
  pedidos = [];
  res.json(response);
}
);

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080")
