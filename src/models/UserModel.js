const connection = require("../database/connection");
const { DataTypes } = require("sequelize");

let UserModel = connection.define("User", {
    firstname:{
        type: DataTypes.STRING(50), // VARCHAR(50)
        allownull:false,// NOT NULL
    },  
    surname: {type: DataTypes.STRING(50),  allownull:false},
    email:{type: DataTypes.STRING(255), allownull:false},
    password:{type: DataTypes.STRING(255), allownull:false},
    
});

module.exports = UserModel;
