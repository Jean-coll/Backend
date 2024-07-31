const connection = require("../database/connection");
const { DataTypes } = require("sequelize");


const ProductModel= connection.define("product",{
name:DataTypes.STRING(255), //Obrigatório
description:DataTypes.STRING(255),// Opcional
price:DataTypes.DECIMAL(5,2),// Obrigatório
price_with_discount:DataTypes.DECIMAL(5,2),//Opcional
enabled: DataTypes.BOOLEAN,//"Opcional"//Padrão:0
stock:DataTypes.INTEGER //Obrigatório 

});

module.exports=ProductModel;


