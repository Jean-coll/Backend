const UserModel= require("../models/UserModel");


const UserCreateValidation=async (request, response, next) => {

    let messageReturn = ''
        const email = resquest.body.email
        const emailReq = await UserModel.findOne({
            where: { email }
            });

        if (!resquest.body.firstname || !resquest.body.surname || !resquest.body.email || !resquest.body.password){
            messageReturn = 'firstname, surname, email e password são obrigatórios!'
            return response.status(400).json({
                message: messageReturn
            })
        } 
        else if (emailReq && emailReq.dataValues.id > 0){
            messageReturn = 'Esse email já está cadastrado!'
            return response.status(400).json({
                message: messageReturn

            })

        }






    next();

}

module.exports=UserCreateValidation;


