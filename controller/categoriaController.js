//IMPORTACAO DO MODULO DO EXPRESS
const express = require('express');

const categoriaModel = require("../model/categoria");

const router = express.Router();

//ROTAS DE INSERÇÃO DE CATEGORIA
//ROTA POST
router.post("/categoria/cadastrarCategoria", (req, res)=>{
    let {nome_categoria} = req.body;

    categoriaModel.create({nome_categoria})
    .then(()=>{
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Categoria cadastrada com sucesso"
        })
    })
    .catch(((error)=>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error
        });
    }));
});

//ROTA GET
router.get("/categoria/listarCategoria", (req, res)=>{
    let {listar_categoria} = req.body;

    categoriaModel.create({listar_categoria})
    .then(()=>{
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Categoria listada com sucesso"
        })
    })
    .catch(((error)=>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error
        });
    }));
});

//ROTA PUT
router.get("/categoria/alterarCategoria", (req, res)=>{
    let {alterar_categoria} = req.body;

    categoriaModel.create({alterar_categoria})
    .then(()=>{
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Categoria alterada com sucesso"
        })
    })
    .catch(((error)=>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error
        });
    }));
});

//ROTA DELETE
router.get("/categoria/excluirCategoria", (req, res)=>{
    let {excluir_categoria} = req.body;

    categoriaModel.create({excluir_categoria})
    .then(()=>{
        return res.status(201).json({
            errorStatus: false,
            messageStatus: "Categoria excluída com sucesso"
        })
    })
    .catch(((error)=>{
        return res.status(500).json({
            errorStatus: true,
            messageStatus: error
        });
    }));
});

module.exports = router;

