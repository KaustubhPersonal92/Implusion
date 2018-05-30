'use strict';

var productController = require('../controller/productController');

module.exports = function(app) {
    
    app.get('/api/product/getProductImages', productController.getProductImages);

    app.get('/api/product/getProductInfo/:id', productController.getProductInfoById);

    app.get('/api/product/getCartDetail/', productController.getCartDetail)
    
    app.post('/api/product/addToCart/', productController.addToCartProduct);

    app.delete('/api/product/deleteCart/:shoppingId', productController.deleteCart);

};