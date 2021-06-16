const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use('/paginainicial',function(req, res, next) {
    res.status(200).send({
        mensagem: "OK, deu certo. Estou na página inicial"
    });
});

module.exports = app;