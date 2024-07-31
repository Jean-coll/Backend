const UserModel=require("../models/UserModel");

UserModel.create({
    firstname:"Joaquim",
    surname:"Silva",
    email:"Joaquim@email.com",
    password:"1234"
});

UserModel.destroy({
    where: {
        id:2
    }
})
























