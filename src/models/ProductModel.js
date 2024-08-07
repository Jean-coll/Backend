const connection = require("../database/connection");
const { DataTypes } = require("sequelize");
const UserModel = require("./UserModel");


const ProductModel = connection.define("product", {

    user_id:{
        type:DataTypes.INTEGER,
        allownull:false,
        references:{
            model:UserModel,
            key:'id'
        },
        onDelete:'CASCADE'
    },




    name: {
        type: DataTypes.STRING(255), allownull: false
    },
    description: DataTypes.TEXT,
    price: {
        type: DataTypes.DECIMAL(5, 2),
        allownull: false,
    },
    price_with_discount: DataTypes.DECIMAL(5, 2),
    enabled: {
        type: DataTypes.BOOLEAN, allownull: false, defaultvalue: 0
    },

    stock: {
        type: DataTypes.INTEGER,
        allownull: false,
        defaultvalue: 0,
    },


});
module.exports = ProductModel;
