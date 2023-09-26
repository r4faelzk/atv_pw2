//IMPORTACAO DO MODULO DO EXPRESS
const express = require('express');

const produtoModel = require("../model/produto");

const router = express.Router();


//ROTA POST
router.post("/cadastrarProduto", (req, res) => {
    const { nome_produto, valor_produto, imagem_produto, descricao_produto } = req.body;

    produtoModel.create({
        nome_produto,
        valor_produto,
        imagem_produto,
        descricao_produto
    })
    .then(() => {
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Produto cadastrado com sucesso"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message 
        });
    });
});

// ROTA GET para listar produto
router.get("/listarProduto", (req, res) => {
    produtoModel.findAll() // Use 'findAll' para buscar todas as categorias
    .then((produtos) => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "Produto listado com sucesso",
            data: produtos // Retorne os dados das categorias
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});


router.put("/alterarProduto", (req, res) => {
    const { nome_produto, valor_produto, imagem_produto, descricao_produto } = req.body;


    const { id } = req.params;

    produtoModel.update({
        nome_produto, 
        valor_produto,
        imagem_produto,
        descricao_produto 
    }, {
        where: { codigo_produto: id }
    })
    .then(() => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "Produto alterado com sucesso"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});



module.exports = router;