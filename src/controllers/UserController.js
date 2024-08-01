const UserModel=require('../models/UserModel');

const UserController={

    create (request) {
        UserModel.create(request.body);
    },

    async list() {
        let users= await UserModel.findAll();
        console.log(users[0].firstname);
    },
}

module.exports=UserController;