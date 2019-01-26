 'use strict';

var db = require('../../../../config/sequelize').db;
var generalConfig = require('../../../../config/generalConfig');
var async = require('async');
var Sequelize = require("sequelize");
var email = require('nodemailer');
var jwt = require('jsonwebtoken');

var bcrypt = require('bcrypt');
var payumoney = require('payumoney-node');
var request = require('request');

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
    var userData = {};
    userData.firstName = req.body.user.firstName;
    userData.lastName = req.body.user.lastName;
    userData.email = req.body.user.email;
    userData.password = req.body.user.password;
    userData.contactNumber = req.body.user.number;
    userData.gender = req.body.user.gender;
    userData.status = 1;
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
            addUserProcess(userData, function(response){
                if(response) {
                    userAuthenication(response.userData, function(loginSuccess){
                        if(loginSuccess.status ==200) {
                            res.json({
                                status: 200,
                                data: loginSuccess.data,
                                message: 'User added  successfully.'  
                            })
                        }
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

var addUserProcess = function(user, callback) {
    db.models.user.create(user).then(function(userData) {
        if(userData) {
            db.models.user.findOne({
                where:{
                    email:user.email
                },
                attributes:['id']
            }).then(function(user) {
                //sendEmailUser(user);
                if(userData) {
                    callback({userData});
                } else {
                    callback({
                        status: 201,
                        data: [],
                        message: 'Unable to register user.'
                    });
                }
            })    
        }
        else {
            callback({
                status: 401,
                data: [],
                message: 'Unable to register user.'
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
    if(req.token == 'null') {
        res.json({
            status: 404,
            data: [],
            message: 'Token not found.'
        });
    } else {
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
    }
    
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


/**
 * Author Kaustubh Mishra
 * Get User Profile from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.userLogin = function(req, res) {
    userAuthenication(req.body, function(response){
        if(response.status == 200) {
            res.json(response)
        } else {
            res.json(response)
        }
    })
    
};

var userAuthenication = function(user, callback) {
    db.models.user.findOne({
        where:{
            email:user.email
        }
    }).then(function(userData){
        if(userData) {
            var token = jwt.sign({"id": userData.id,"email": userData.email},'secretkey');
            callback({
                status: 200,
                data: token,
                message: 'User logged in successfully.'
            });
        } else {
            callback({
                status: 404,
                data: [],
                message: 'Email is invalid.'
            });
        }
    });
};



exports.makePayment = function(req, res) {
    payumoney.setKeys('RgUogEdY', '9oRrszYL8n', 'LhnHUdr5vlbZ9roX9WsK6JY1l6Kz1DXIy1nSV24Qu54=');

    payumoney.isProdMode(true);


    var paymentData = {
        productinfo: "Test",
        txnid: "Test",
        amount: "100",
        email: "kmkaustubh11@gmail.com",
        phone: "7007825959",
        lastname: "Mishra",
        firstname: "Kaustubh",
        surl: "http://localhost:3000/payu/success",
        furl: "http://localhost:3000/payu/fail"
    };
    
    payumoney.makePayment(paymentData, function(error, response) {
    if (error) {
        // Some error
        console.log()
    } else {
        res.json({
            status: 200,
            data: response,
            message: 'Link'
        });
    }
    });
}

/**
 * Author Kaustubh Mishra
 * Get Pincode
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.getPincode = function(req, res) {
    request.get('http://postalpincode.in/api/pincode/'+req.params.pincode, function(error, response, body){
        res.json(JSON.parse(body));
    })
};


/**
 * Author Kaustubh Mishra
 * Change Password
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.changePassword = function(req, res) {
    changePasswordProcess(req.body, function(response){
        if(response.status == 200) {
            res.json(response)
        } else {
            res.json(response)
        }
    });    
};

var changePasswordProcess = function(user, callback) {
    db.models.user.findOne({
        where:{
            email:user.email
        }
    }).then(function(userData){
        if(userData) {
            if(userData.password == user.currentPassword) {
                updatePassword(userData, user, function(response){
                    callback(response);
                })
            } else {
                callback({
                    status: 404,
                    data: [],
                    message: 'Current Password is invalid.'
                });
            }
        } else {
            callback({
                status: 404,
                data: [],
                message: 'Email is invalid.'
            });
        }
    });
};

var updatePassword = (userData, user, callback) =>{
    var userAddress = {};
    userAddress.password = user.newPassword;
    db.models.user.update(userAddress,{
        where:{
            id: userData.id,
        }
    }).then(function(updateUser){
        if(updateUser) {
            callback({
                status: 200,
                data: [],
                message: 'Password updated successfully.'
            });
        } else {
            callback({
                status: 401,
                data: [],
                message: 'Unable to update password.'  
            })
        }
    });
};

/**
 * Author Kaustubh Mishra
 * Change Password
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for User Info
*/

exports.updateProfile = function(req, res) {
    updateProfileProcess(req, function(response){
        if(response.status == 200) {
            res.json(response)
        } else {
            res.json(response)
        }
    });    
};

var updateProfileProcess = (request, callback)=>{
    db.models.user.findOne({
        where:{
            id:request.params.id
        }
    }).then(function(userFound){
        if(userFound) {
            updateProfileFunc(userFound.id, request.body, function(response){
                callback(response);
            })
        } else {
            callback({
                status: 401,
                data: [],
                message: 'User not found.'  
            })
        }
        
    })
}

var updateProfileFunc = (userId, data, callback)=>{
    var userProfile = {};
    userProfile.firstName = data.firstName;
    userProfile.lastName = data.lastName;
    userProfile.email = data.email;
    userProfile.contactNumber = data.contactNumber;
    userProfile.gender = data.gender;
    
    db.models.user.update(userProfile,{
        where:{
            id: userId,
        }
    }).then(function(updateUser){
        if(updateUser) {
            callback({
                status: 200,
                data: [],
                message: 'Profile updated successfully.'
            });
        } else {
            callback({
                status: 401,
                data: [],
                message: 'Unable to update profile.'  
            })
        }
    });
}
    



