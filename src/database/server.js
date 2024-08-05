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
const UserController = require('../controllers/UserController.js');
const ProductController = require('../controllers/ProductController.js');

app.get('/users/', async function (request, response) {
    const users = await UserModel.findAll();
    response.json(users);
});

app.post('/users', UserController.create);

app.put('/users/:id', UserController.update );
  
app.delete('/users/:id', UserController.delete);


app.post ('/products', ProductController.create);

app.put('/products/:id', ProductController.update );

app.delete('/products/:id', ProductController.delete);


app.listen(3000);




















