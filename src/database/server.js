//const UserController = require("../controllers/UserController")

//const request={
//  body:{
//        firstname:"Joaquim",
//        surname:"Silva",
//        email:"joaquim@email.com",
//        password:"1234",  
// }
//}

//UserController.create(request);
//UserController.list();



// const ProductController = require('../controllers/ProductController');

//  const request = {
//      body: {
//          name: "Motorola",
//          price: 19.58,
//          description: "Descrição do produto"
//      }
//  }

//  ProductController.create(request);
//  ProductController.list();

const express = require('express');
const app = express();
app.use(express.json());




const ProductModel = require('../models/ProductModel.js');

app.get('/products', async function (request, response) {
    const products = await ProductModel.findAll();
    response.json(products);
});



const UserModel = require('../models/UserModel.js');

app.get('/users/', async function (request, response) {
    const users = await UserModel.findAll();
    response.json(users);
});

app.post('/users',  function (request, response) {
    UserModel.create(request.body);
    return response.json({
        message:"Usuario criado com sucesso!" });
    });

app.post ('/products', function (request,response)  {
    ProductModel.create(request.body);
   return response.json({
    message:"Produto disponivel"
   });

});


app.listen(3000);




















