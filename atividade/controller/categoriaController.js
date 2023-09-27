// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require('express');
const categoriaModel = require("../model/categoria"); // IMPORTAÇÃO DO MODELO DE CATEGORIA
const router = express.Router();

// ROTA POST PARA CADASTRAR UMA CATEGORIA
router.post("/cadastrarCategoria", (req, res) => {
    let { nome_categoria, observacoes_categoria } = req.body; // OBTENÇÃO DOS DADOS DO CORPO DA REQUISIÇÃO

    // CRIA UMA NOVA CATEGORIA NO BANCO DE DADOS USANDO O MODELO
    categoriaModel.create({
        nome_categoria,
        observacoes_categoria
    })
    .then(() => {
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "CATEGORIA CADASTRADA COM SUCESSO"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message 
        });
    });
});

// ROTA GET PARA LISTAR CATEGORIAS
router.get("/listarCategoria", (req, res) => {
    // BUSCA TODAS AS CATEGORIAS NO BANCO DE DADOS USANDO O MODELO
    categoriaModel.findAll() 
    .then((categorias) => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "CATEGORIAS LISTADAS COM SUCESSO",
            data: categorias // RETORNA OS DADOS DAS CATEGORIAS
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});

// ROTA PUT PARA ALTERAR UMA CATEGORIA
router.put("/alterarCategoria/:id", (req, res) => {
    let { nome_categoria, observacoes_categoria } = req.body; // OBTENÇÃO DOS DADOS DO CORPO DA REQUISIÇÃO
    let { id } = req.params; // OBTENÇÃO DO ID DA CATEGORIA A SER ALTERADA

    // ATUALIZA A CATEGORIA NO BANCO DE DADOS USANDO O MODELO
    categoriaModel.update({
        nome_categoria,
        observacoes_categoria
    }, {
        where: { codigo_categoria: id } // CONDIÇÃO PARA ENCONTRAR A CATEGORIA PELO ID
    })
    .then(() => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "CATEGORIA ALTERADA COM SUCESSO"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});

// ROTA DELETE PARA EXCLUIR UMA CATEGORIA
router.delete("/excluirCategoria/:id", (req, res) => {
    let { id } = req.params; // OBTENÇÃO DO ID DA CATEGORIA A SER EXCLUÍDA

    // EXCLUI A CATEGORIA NO BANCO DE DADOS USANDO O MODELO
    categoriaModel.destroy({
        where: { codigo_categoria: id } // CONDIÇÃO PARA ENCONTRAR A CATEGORIA PELO ID
    })
    .then(() => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "CATEGORIA EXCLUÍDA COM SUCESSO"
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
