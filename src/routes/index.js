const express = require ('express');
const routes = express.Router();

const HomeController = require ('../app/controllers/HomeController');


const products = require('./products');
const users = require('./users');
const cart = require('./cart');

// Home
routes.get('/', HomeController.index);

routes.use('/products', products);
routes.use('/users', users);
routes.use('/cart', cart);

// Alias
routes.get('/ads/create', function (req,res){
  return res.redirect("/products/create");
});
routes.get('/accounts', function (req,res){
  return res.redirect("/users/login");
});

module.exports = routes;



// HTTP VERBS
// GET : Receber RESOURCE
// POST: Criar ou Salvar um **NOVO** RESOURCE com dados enviados
// PUT: Atualizar  um RESOURCE existente
// DELETE: Deletar um RESOURCE