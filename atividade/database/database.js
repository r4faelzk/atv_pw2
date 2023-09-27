//IMPORTACAO DO MODULO DO SEQUELIZE
const sequelize = require("sequelize");

//CRIA A CONEXAO COM O BANCO DE DADOS POR MEIO DO SEQUELIZE
const connection = new sequelize(
    "atv_pw2",
    "root",
    "",
    {
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        timezone: "-03:00"
    }
);

module.exports = connection;