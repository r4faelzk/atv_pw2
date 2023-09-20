//IMPORTACAO DO MODULO DO EXPRESS
const express = require('express');

//INSTÂNCIA EXECUTÁVEL DO EXPRESS
const app = express();

//ROTA POST
app.post('/cadastrar', (req, res)=>{
    res.send('Produto cadastrado com sucesso')
});

//ROTA GET
app.get('/listar', (req, res)=>{
    res.send('Produto listado com sucesso')
});

//ROTA PUT
app.get('/alterar', (req, res)=>{
    res.send('Produto alterado com sucesso')
});

//ROTA DELETE
app.delete('/excluir', (req, res)=>{
    res.send('Produto excluído com sucesso')
});
