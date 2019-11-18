'use strict';

var userController = require('../controller/userController');

const tokenGetter = require('../../../../middleware/middleware');

module.exports = function(app) {

    app.get('/api/user/getUserProfile/', tokenGetter, userController.getloggedInUserProfile);

    app.post('/api/user/addUser/', userController.addUserData);

    app.post('/api/user/authenication/', userController.userLogin);

    app.get('/api/user/address/', tokenGetter, userController.getUserAddress);

	app.post('/api/user/address/', tokenGetter, userController.adduserAddress);
	
	app.get('/api/user/address/:addressId/:userId', tokenGetter, userController.getUserAddressById);

	app.put('/api/user/address/:id/', tokenGetter, userController.updateUserAddress);

	app.post('/makePayment', userController.makePayment);

	app.get('/api/pincode/:pincode', userController.getPincode);

	app.post('/api/user/changePassword', userController.changePassword);

	app.put('/api/user/updateProfile/:id', userController.updateProfile);

};