 'use strict';

var db = require('../../../../config/sequelize').db;
var generalConfig = require('../../../../config/generalConfig');
var async = require('async');
var Sequelize = require("sequelize");
var email = require('nodemailer');
var jwt = require('jsonwebtoken');

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
    var generatePassword = Math.random().toString(36).slice(-8);
    var userData = {};
    userData.firstName = req.body.user.firstName;
    userData.lastName = req.body.user.lastName;
    userData.email = req.body.user.email;
    userData.password = generatePassword;
    userData.address = req.body.user.address;
    userData.city = req.body.user.city;
    userData.pincode = req.body.user.pincode;
    userData.contactNumber = req.body.user.contactNumber;
    userData.country = req.body.user.country;
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
                        message: 'Your order has been placed successfully.'  
                    })
                } else {
                    res.json({
                        status: 401,
                        data: [],
                        message: 'Unable to placed your order.'  
                    })
                }
            })
        }
    })
};

var addUserProcess = function(user, cart, callback) {
    db.models.user.create(user).then(function(userData) {
        if(userData) {
            db.models.user.findOne({
                where:{
                    email:user.email
                },
                attributes:['id']
            }).then(function(user) {
                //sendEmailUser(user);
                addUserProduct(user.id, cart, function(respone){
                    if(respone) {
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
                })
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
            email:req.body.email,
            password: req.body.password
        }
    }).then(function(user){
        var token = jwt.sign({"id": user.id,"email": user.email},'secretkey');
        if(user) {
            res.json({
                status: 200,
                data: token,
                message: 'User logged in successfully.'
            });
        } else {
            res.json({
                status: 404,
                data: [],
                message: 'Email and Password is invalid.'
            });
        }
    });
};



