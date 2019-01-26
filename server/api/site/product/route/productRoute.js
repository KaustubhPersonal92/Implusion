'use strict';

var productController = require('../controller/productController');
const tokenGetter = require('../../../../middleware/middleware');

module.exports = function(app) {
    
    app.get('/api/product/getProductImages', productController.getProductImages);

    app.get('/api/product/getProductInfo/:id', productController.getProductInfoById);

    app.get('/api/product/getCartDetail/:uniqueID', productController.getCartDetail);

    app.get('/api/product/getCartSummary/', tokenGetter, productController.getCartSummary)
    
    app.post('/api/product/addToCart/', productController.addToCartProduct);

    app.post('/api/product/deleteCart/', productController.deleteCart);

    app.put('/api/product/updateCart/:shoppingId', productController.updateCartProduct);

	app.put('/api/product/updateUserCart/', tokenGetter, productController.updateUserCart);

	app.get('/api/product/getUserCartData/', tokenGetter, productController.getUserCartData);
	
	

};