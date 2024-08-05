const { response } = require('express');
const UserModel = require('../models/UserModel');
const { where } = require('sequelize');

const UserController = {
    async create(request, response) {
        let messageReturn = ""

        const emailReq=Request.body.email
        const email=await UserModel.findOne({
            where:{email}

    });

    console.log(email.Req.datavalues.id)

        if (!request.body.firstname, !request.body.surname, !request.body.email,
            !request.body.password)
            messageReturn = "Firstname,surname,email e password são obrigatorios!"
        else if (email.Req&&email.Req.datavalues.id>0){
            messageReturn="Esse email está cadastrado!"
            UserModel.create(request.body);
            messageReturn = "Usuario criado com sucesso!"
        }

    },
    async list(request, response) {
        const users = await UserModel.findAll();
        return response.json
    },
    async update(request, response) {
        let id = request.params.id;
        UserModel.update(request.body, {
            where: {
                id: id
            }
        })
        return response.json({

            message: "Usuario atualizado com sucesso"
        });
    },
    async delete(request, response) {
        let id = request.params.id;
        UserModel.destroy({
            where: { id }
        });

        return response.json({
            message: "Usuario deletado com sucesso"
        });
    }

}
















module.exports = UserController;