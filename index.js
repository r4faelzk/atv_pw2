//IMPORTANDO O MÓDULO DO EXPRESS
const express = require('express');

//INSTÂNCIA EXECUTÁVEL DO EXPRESS
const app = express();

//CONFIGURACAO PARA O EXPRESS MANIPULAR JSON  
app.use(express.json());

//CONFIGURACAO PARA O EXPRESS TRABALHAR COM DADOS DE FORMULARIO
app.use(express.urlencoded({extended:true}));

//IMPORTACAO DA CONTROLLER CATEGORIA
const categoriaController = require("./controller/categoriaController");
app.use("/", categoriaController);

//TESTANDO O SERVIDOR REQUISIÇÃO/RESPOSTA
app.listen(3000, ()=>{
    console.log('SERVIDOR DA ATIVIDADE ESTÁ RODANDO')
});