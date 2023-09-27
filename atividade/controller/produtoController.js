// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require('express');
const produtoModel = require("../model/produto"); // IMPORTAÇÃO DO MODELO DE PRODUTO
const router = express.Router();

// ROTA POST PARA CADASTRAR UM PRODUTO
router.post("/cadastrarProduto", (req, res) => {
    let { nome_produto, valor_produto, imagem_produto, descricao_produto } = req.body; // OBTENÇÃO DOS DADOS DO CORPO DA REQUISIÇÃO

    // CRIA UM NOVO PRODUTO NO BANCO DE DADOS USANDO O MODELO
    produtoModel.create({
        nome_produto,
        valor_produto,
        imagem_produto,
        descricao_produto
    })
    .then(() => {
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "PRODUTO CADASTRADO COM SUCESSO"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message 
        });
    });
});

// ROTA GET PARA LISTAR PRODUTOS
router.get("/listarProduto", (req, res) => {
    // BUSCA TODOS OS PRODUTOS NO BANCO DE DADOS USANDO O MODELO
    produtoModel.findAll()
    .then((produtos) => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "PRODUTO LISTADO COM SUCESSO",
            data: produtos // RETORNA OS DADOS DOS PRODUTOS
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});

// ROTA PUT PARA ALTERAR UM PRODUTO
router.put("/alterarProduto/:id", (req, res) => {
    let { nome_produto, valor_produto, imagem_produto, descricao_produto } = req.body; // OBTENÇÃO DOS DADOS DO CORPO DA REQUISIÇÃO
    let { id } = req.params; // OBTENÇÃO DO ID DO PRODUTO A SER ALTERADO

    // ATUALIZA O PRODUTO NO BANCO DE DADOS USANDO O MODELO
    produtoModel.update({
        nome_produto, 
        valor_produto,
        imagem_produto,
        descricao_produto 
    }, {
        where: { codigo_produto: id } // CONDIÇÃO PARA ENCONTRAR O PRODUTO PELO ID
    })
    .then(() => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "PRODUTO ALTERADO COM SUCESSO"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});

// ROTA DELETE PARA EXCLUIR UM PRODUTO
router.delete("/excluirProduto/:id", (req, res) => {
    let { id } = req.params; // OBTENÇÃO DO ID DO PRODUTO A SER EXCLUÍDO

    // EXCLUI O PRODUTO NO BANCO DE DADOS USANDO O MODELO
    produtoModel.destroy({
        where: { codigo_produto: id } // CONDIÇÃO PARA ENCONTRAR O PRODUTO PELO ID
    })
    .then(() => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "PRODUTO EXCLUÍDO COM SUCESSO"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});

module.exports = router; // EXPORTA O OBJETO DE ROTA DO EXPRESS
