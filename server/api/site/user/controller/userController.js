 'use strict';

var db = require('../../../../config/sequelize').db;
var generalConfig = require('../../../../config/generalConfig');
var async = require('async');
var Sequelize = require("sequelize");
var email = require('nodemailer');
var jwt = require('jsonwebtoken');

var bcrypt = require('bcrypt');

https://www.nexmo.com/blog/2016/10/19/how-to-send-sms-messages-with-node-js-and-express-dr/

/**
 * Author Kaustubh Mishra
 * Get Product Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.addUserData = function(req, res) {
    console.log("req----", req.body)

    var userData = {};
    userData.firstName = req.body.user.firstName;
    userData.lastName = req.body.user.lastName;
    userData.email = req.body.user.email;
    userData.password = req.body.user.password;
    userData.contactNumber = req.body.user.number;
    userData.gender = req.body.user.gender;
    db.models.user.findOne({
        where:{
            email:req.body.user.email
        }
    }).then(function(user){
        if(user) {
            res.json({
                status: 201,
                data: [],
                message: 'Email-id already existed.'
            });
        } else {
            addUserProcess(userData, req.body.cart, function(respone){
                if(respone) {
                    res.json({
                        status: 200,
                        data: respone,
                        message: 'User added  successfully.'  
                    })
                } else {
                    res.json({
                        status: 401,
                        data: [],
                        message: 'Unable to add user.'  
                    })
                }
            })
        }
    })
};

var addUserProcess = function(user, cart, callback) {
    bcrypt.hash(user.password, 10, function(err, hashPassword) {
        if(hashPassword) {
            user.password = hashPassword;
            db.models.user.create(user).then(function(userData) {
                if(userData) {
                    db.models.user.findOne({
                        where:{
                            email:user.email
                        },
                        attributes:['id']
                    }).then(function(user) {
                        //sendEmailUser(user);
                        if(user) {
                            callback({
                                userID: user.id,
                            });
                        } else {
                            callback({
                                status: 201,
                                data: [],
                                message: 'Unable to placed your order.'
                            });
                        }
                        // addUserProduct(user.id, cart, function(respone){
                        //     if(respone) {
                        //         callback({
                        //             userID: user.id,
                        //         });
                        //     } else {
                        //         callback({
                        //             status: 201,
                        //             data: [],
                        //             message: 'Unable to placed your order.'
                        //         });
                        //     }
                        // })
                    })    
                }
                else {
                    callback({
                        status: 401,
                        data: [],
                        message: 'Failed to placed your order.'
                    });
                }
            });
        } else {

        }
    });    
};

var addUserProduct = function(userId, cart, callback) {
    for(let cartObject of cart) {
        cartObject.user_id = userId;
        db.models.user_order.create(cartObject).then(function(respone){
            if(respone) {
                callback(respone);    
            } else {
                callback(null);
            }
        })
    }
}

/**
 * sendEmailUser will send mail to user
 * @param  {obj}   req
 * @param  {obj}   res
 * @return json for fail or success notification
*/
var sendEmailUser = function(user, callback) {
    var emailTemplate = generalConfig.emailTemplate;
    var emailbody = emailTemplate.usercredentailsEmailBody;
    emailbody = emailbody.replace("%userfullname%", user.firstName);
    emailbody = emailbody.replace("%result%", "Test");
    
    var emailmessage = emailTemplate.emailContainerHeaderString;
    emailmessage += emailbody;
    emailmessage += emailTemplate.emailContainerFooterString;
    // Replace user and pass with your gmail credential to send mail.
    var send = email.createTransport({
        service: 'gmail',
        auth: {
            user: 'kmkaustubh11@gmail.com',
            pass: 'K@ustubh11'
        }
    });
    var message = {
        from:    "noreply@impulsion.com",
        to:      '',
        subject: emailTemplate.userResultSubject,
        html:emailmessage
    };

    send.sendMail(message, function (err, info) {
        if(err) console.error(err);
        else {
            res.json({
                status: 200,
                data:[], 
                message: 'Result has been email to you.'
            });
        }
    });
};


/**
 * Author Kaustubh Mishra
 * Get User Profile from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.getloggedInUserProfile = function(req, res) {

    //Extract user id from user token;

    var userInfo = jwt.verify(req.token, 'secretkey');

    db.models.user.findOne({
        where:{
            id:userInfo.id
        }
    }).then(function(user){
        if(user) {
            res.json({
                status: 200,
                data: user,
                message: 'User Profile loaded successfully.'
            });
        } else {
            res.json({
                status: 404,
                data: [],
                message: 'User Profile not found.'
            });
        }
    });
};

/**
 * Author Kaustubh Mishra
 * Get User Profile from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.userLogin = function(req, res) {
    db.models.user.findOne({
        where:{
            email:req.body.email
        }
    }).then(function(user){
        if(user) {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if(result) {
                    var token = jwt.sign({"id": user.id,"email": user.email},'secretkey');
                    res.json({
                        status: 200,
                        data: token,
                        message: 'User logged in successfully.'
                    });
                } else {
                    res.json({
                        status: 404,
                        data: [],
                        message: 'Password is invalid.'
                    });
                } 
            });
        } else {
            res.json({
                status: 404,
                data: [],
                message: 'Email is invalid.'
            });
        }
    });
};

/**
 * Author Kaustubh Mishra
 * Get User Address from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.getUserAddress = function(req, res) {
    
    var userInfo = jwt.verify(req.token, 'secretkey');
    db.models.user_address.findAll({
        where:{
            user_id:userInfo.id
        }
    }).then(function(user){
        if(user) {
            res.json({
                status: 200,
                data: user,
                message: 'User address loaded successfully.'
            });
        } else {
            res.json({
                status: 404,
                data: [],
                message: 'Failed to load user address.'
            });
        } 
    });
};


/**
 * Author Kaustubh Mishra
 * Add user address inot db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method POST
*/

exports.adduserAddress = function(req, res) {
    
    //Extract user id from user token;

    var userInfo = jwt.verify(req.token, 'secretkey');

    var userAddress = {};
    userAddress.user_id = userInfo.id;
    userAddress.address = req.body.address;
    userAddress.locality = req.body.locality;
    userAddress.landmark = req.body.landmark;
    userAddress.city = req.body.city;
    userAddress.state = req.body.state;
    userAddress.country = req.body.country;
    userAddress.pincode = req.body.pincode;
    userAddress.address_type = req.body.address_type;
    userAddress.reciever_name = req.body.reciever_name;
    userAddress.contact_number = req.body.contact_number;
    userAddress.alternate_contact_number = req.body.alternate_contact_number;
    userAddress.status = 1;
    db.models.user_address.create(userAddress).then(function(user){
        if(user) {
            res.json({
                status: 200,
                data: [],
                message: 'Address added successfully.'
            });
        } else {
            res.json({
                status: 401,
                data: [],
                message: 'Unable to add address.'  
            })
        }
    })
};

/**
 * Author Kaustubh Mishra
 * Get User Address from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.getUserAddressById = function(req, res) {
    
    var userInfo = jwt.verify(req.token, 'secretkey');
    db.models.user_address.findOne({
        where:{
            user_id:req.params.userId,
            id:req.params.addressId
        }
    }).then(function(user){
        if(user) {
            res.json({
                status: 200,
                data: user,
                message: 'User address loaded successfully.'
            });
        } else {
            res.json({
                status: 404,
                data: [],
                message: 'Failed to load user address.'
            });
        } 
    });
};

/**
 * Author Kaustubh Mishra
 * Update user address inot db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method POST
*/

exports.updateUserAddress = function(req, res) {
    
    //Extract user id from user token;

    var userInfo = jwt.verify(req.token, 'secretkey');
    console.log("req.params.addressId---", req.params.addressId)
    db.models.user_address.findOne({
        where:{
            id: req.params.id,
            user_id:userInfo.id
        }
    }).then(function(user){
        if(user) {
            var userAddress = {};
            userAddress.user_id = userInfo.id;
            userAddress.address = req.body.address;
            userAddress.locality = req.body.locality;
            userAddress.landmark = req.body.landmark;
            userAddress.city = req.body.city;
            userAddress.state = req.body.state;
            userAddress.country = req.body.country;
            userAddress.pincode = req.body.pincode;
            userAddress.address_type = req.body.address_type;
            userAddress.reciever_name = req.body.reciever_name;
            userAddress.contact_number = req.body.contact_number;
            userAddress.alternate_contact_number = req.body.alternate_contact_number;
            db.models.user_address.update(userAddress,{
                where:{
                    id: req.params.id,
                }
            }).then(function(updateUser){
                if(updateUser) {
                    res.json({
                        status: 200,
                        data: [],
                        message: 'Address updated successfully.'
                    });
                } else {
                    res.json({
                        status: 401,
                        data: [],
                        message: 'Unable to update address.'  
                    })
                }
            })
            
        } else {
            res.json({
                status: 401,
                data: [],
                message: 'Unable to update address.'  
            })
        }
    })
};