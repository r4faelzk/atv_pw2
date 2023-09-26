//IMPORTACAO DO MODULO DO EXPRESS
const express = require('express');

const categoriaModel = require("../model/categoria");

const router = express.Router();

// ROTA POST para cadastrar categoria
router.post("/cadastrarCategoria", (req, res) => {
    let { nome_categoria, observacoes_categoria } = req.body;

    categoriaModel.create({
        nome_categoria,
        observacoes_categoria
    })
    .then(() => {
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Categoria cadastrada com sucesso"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message 
        });
    });
});

// ROTA GET para listar categorias
router.get("/listarCategoria", (req, res) => {
    categoriaModel.findAll() 
    .then((categorias) => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "Categorias listadas com sucesso",
            data: categorias // Retorne os dados das categorias
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});

// ROTA PUT para alterar categoria
router.put("/alterarCategoria", (req, res) => {
    let { nome_categoria, observacoes_categoria } = req.body;
    let { id } = req.params;

    categoriaModel.update({
        nome_categoria,
        observacoes_categoria
    }, {
        where: { codigo_categoria: id }
    })
    .then(() => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "Categoria alterada com sucesso"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error.message
        });
    });
});

// ROTA DELETE para excluir categoria
router.delete("/excluirCategoria/:id", (req, res) => {
    let { id } = req.params;

    categoriaModel.destroy({
        where: { codigo_categoria: id }
    })
    .then(() => {
        return res.status(200).json({
            errorStatus: false,
            messageStatus: "Categoria excluída com sucesso"
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