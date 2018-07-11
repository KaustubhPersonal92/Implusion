'use strict';

var productController = require('../controller/productController');

module.exports = function(app) {
    
    app.get('/api/product/getProductImages', productController.getProductImages);

    app.get('/api/product/getProductInfo/:id', productController.getProductInfoById);

    app.get('/api/product/getCartDetail/', productController.getCartDetail);

    app.get('/api/product/getCartSummary/', productController.getCartSummary)
    
    app.post('/api/product/addToCart/', productController.addToCartProduct);

    app.post('/api/product/deleteCart/', productController.deleteCart);

    app.put('/api/product/updateCart/:shoppingId', productController.updateCartProduct);

    app.post('/api/product/addUser/', productController.addUser);

};