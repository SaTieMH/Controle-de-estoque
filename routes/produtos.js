//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pg = require("../pg").pool;

//RETORNA TODOS OS PRODUTOS
router.get('/', function(req, res, next){
    res.status(200).send({
        mensagem: "Usando o GET dentro da rota de produtos"
    });
});

//RETORNA O DADO DE UM PRODUTO
router.get('/:id_produto', function (req, res, next) {
    const id = req.params.id_produto;
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou o ID ' + id
        });
    }
});

//INSERE UM PRODUTO
router.post('/', function(req, res, next){
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    /*pg.connect( funtion(error, conn) {
        conn.query(
            'insert into produtos values (?,?);',
            [req.body.nome, req.body.preco]
        )
    });*/
    res.status(201).send({
        mensagem: "Usando o POST dentro da sua rota de produtos",
        produtoInserido: produto
    });
});

//ALTERA UM PRODUTO
router.patch('/', function(req, res, next) {
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da sua rota de produtos"
    });
});

//EXCLUI UM PRODUTO
router.delete('/', function(req, res, next) {
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da sua rota de produtos"
    });
});

module.exports = router;