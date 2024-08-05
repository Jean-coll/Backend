const ProductModel = require('../models/ProductModel')

const ProductController = {

    create(request) {
        ProductModel.create(request.body);
     return response.json({
        message:"Produto disponivel"
       });
    },
    async list(request,response) {
        let products = await ProductModel.findAll();
        console.log(products[0].dataValues);
    },
    async update(request, response) {
        let id = request.params.id;
        ProductModel.update(request.body, {
            where: {
                id: id
            }
        });

        return response.json({

            message: "Produto atualizado com sucesso"
        });
    },

    async delete(request,response) {
        let id=request.params.id;
        ProductModel.destroy({
            where:{id}
        });

        return response.json({
            message:"Produto deletado com sucesso"
        });
    }



}

module.exports = ProductController;
