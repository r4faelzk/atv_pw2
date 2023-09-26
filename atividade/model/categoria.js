//IMPORTACAO DO MODULO DO SEQUELIZE
const sequelize = require("sequelize");

//IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS 
const connection = require("../database/database");

const Categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true
        },

        nome_categoria: {
            type: sequelize.STRING(255),
            allowNull: false
        },

        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false 
    }
);

Categoria.sync({ force: false });

module.exports = Categoria;
