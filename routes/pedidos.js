const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/', function (req, res, next) {
    res.status(200).send({
        mensagem: "Retorna todos os pedidos"
    });
});

//RETORNA UM PEDIDO
router.get('/:id_pedido', function (req, res, next) {
    const id = req.params.id_pedido;
    res.status(200).send({
        mensagem: "Retorna pedido de id " + id
    });
});

//CRIA UM PEDIDO
router.post('/', function (req, res, next) {
    const pedido = {
        id_pedido: req.body.id_pedido,
        quantidade: req.body.quantidade
    }
    res.status(200).send({
        mensagem: "Insere um pedido",
        pedidoCriado: pedido
    });
});

//EXCLUI UM PEDIDO
router.delete('/', function (req, res, next) {
    res.status(200).send({
        mensagem: "Exclui um pedido"
    });
});

module.exports = router;