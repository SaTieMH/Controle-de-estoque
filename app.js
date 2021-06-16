const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); //apenas dados simples
app.use(bodyParser.json()); //aceita apenas json de entrada no body

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//TRATAMENTO DE ERRO
//trata caso não entre nem em produtos ou pedidos
app.use(function (req, res, next) {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});
//trata caso não entre em uma rota possível de produtos ou pedidos
//também faz o tratamento de time out exception
app.use(function(error, req, res, next) {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

app.use('/paginainicial',function(req, res, next) {
    res.status(200).send({
        mensagem: "OK, deu certo. Estou na página inicial"
    });
});

module.exports = app;