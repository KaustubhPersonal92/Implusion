'use strict';

var productController = require('../controller/productController');

module.exports = function(app) {
    function verifyToken(req, res, next) {
		const bearerHeader = req.headers['authorization'];
		if(typeof bearerHeader !== 'undefined') {
			const bearer = bearerHeader.split(' ');
			const bearerToken = bearer[1];
			req.token = bearerToken;
			next();
		} else {
			res.json({
	            status: 404,
	            data: [],
	            message: 'No Token supplied.'
			})
		}
    };
    
    app.get('/api/product/getProductImages', productController.getProductImages);

    app.get('/api/product/getProductInfo/:id', productController.getProductInfoById);

    app.get('/api/product/getCartDetail/:uniqueID', productController.getCartDetail);

    app.get('/api/product/getCartSummary/', productController.getCartSummary)
    
    app.post('/api/product/addToCart/', productController.addToCartProduct);

    app.post('/api/product/deleteCart/', productController.deleteCart);

    app.put('/api/product/updateCart/:shoppingId', productController.updateCartProduct);

	app.put('/api/product/updateUserCart/', verifyToken, productController.updateUserCart);

	app.get('/api/product/getUserCartData/', verifyToken, productController.getUserCartData);
	
	

};