'use strict';

var userController = require('../controller/userController');

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

    app.get('/api/user/getUserProfile/', verifyToken, userController.getloggedInUserProfile);

    app.post('/api/user/addUser/', verifyToken, userController.addUserData);

    app.post('/api/user/authenication/', userController.userLogin);

    

};