 'use strict';

var db = require('../../../../config/sequelize').db;
var generalConfig = require('../../../../config/generalConfig');
var async = require('async');
var Sequelize = require("sequelize");
var email = require('nodemailer');

https://www.nexmo.com/blog/2016/10/19/how-to-send-sms-messages-with-node-js-and-express-dr/




/**
 * Author Kaustubh Mishra
 * Get Product Images from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Images
*/

exports.getProductImages = function(req, res) {
    console.log("Reuqtes commee-----")
    db.models.products.findAll().then(function(product) {
        if(product) {
            res.json({
                status: 200,
                data: product,
                message: 'Product Images loaded successfully.'
            });
        }
        else {
            res.json({
                status: 401,
                data: [],
                message: 'Failed to load product images.'
            });
        }
    });     
};

/**
 * Author Kaustubh Mishra
 * Get Product Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.getProductInfoById = function(req, res) {
    db.models.products.findOne({
        where:{
            id: req.params.id
        }
    }).then(function(productData) {
        if(productData) {
            res.json({
                status: 200,
                data: productData,
                message: 'Product info loaded successfully.'
            });
        }
        else {
            res.json({
                status: 401,
                data: [],
                message: 'Failed to load product info.'
            });
        }
    });     
};

/**
 * Author Kaustubh Mishra
 * Get Product Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.addToCartProduct = function(req, res) {
    var cartData = {};
    cartData.quantity = req.body.quantity;
    cartData.productId = req.body.productId;
    cartData.userId = req.body.userId;

    db.models.shopping_cart.create(cartData).then(function(productData) {
        if(productData) {
            var cartItem = {};
            cartItem.productId = req.body.productId;
            cartItem.quantity = req.body.quantity;
            cartItem.shoppingCartId = productData.id;
            cartItem.price = req.body.price;
            db.models.cart_item.create(cartItem).then(function (respone) {
                if(respone){
                    orderDetail(req.body.productId, req.body.price, req.body.quantity, 'S', 'Yellow', function(orderResponse){
                        if(orderResponse){
                            res.json({
                                status: 200,
                                data: orderResponse,
                                message: 'Product added into cart successfully.'
                            });    
                        } else {
                            res.json({
                                status: 401,
                                data: [],
                                message: 'Failed to add product in cart.'
                            });
                        }
                                
                    })
                } else {
                    res.json({
                        status: 401,
                        data: [],
                        message: 'Failed to add product in cart.'
                    });
                }   
            })
        }
        else {
            res.json({
                status: 401,
                data: [],
                message: 'Failed to load product info.'
            });
        }
    });     
};

/**
 * Author Kaustubh Mishra
 * Get Cart Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.getCartDetail = function(req, res) {
    var productResult = '';
    db.models.shopping_cart.findAll({
        include: [{
            model: db.models.cart_item,
            include:[{
                model: db.models.products
            }]
        }]
    }).then(function (productData){
        var trialListArray = [];
        if(productData.length > 0) {
            async.forEach(Object.keys(productData), function(item, callback) {
                var trialList = {};
                for(var i=0; i < productData[item].dataValues.cart_items.length; i++ ) {
                    if(productData[item].dataValues.cart_items[i].product &&  productData[item].dataValues.cart_items[i].product != null) {
                        var trialList = {};
                        trialList = {
                            "shoppingCart_id": productData[item].dataValues.cart_items[i].shoppingCartId,
                            "productName": productData[item].dataValues.cart_items[i].product.dataValues.Name,
                            "productPrice": productData[item].dataValues.cart_items[i].price,
                            "productImage": productData[item].dataValues.cart_items[i].product.dataValues.Product_Image,
                            "productQuantity": productData[item].dataValues.cart_items[i].quantity,
                            "product_id": productData[item].dataValues.cart_items[i].productId
                        }
                        trialListArray.push(trialList);
                    }
                }
                
            }, function(err){
                console.log(err);
            })
            res.json({
                status: 200,
                data: trialListArray,
                message: 'Failed to load data..!'
            });
            
        }
        else {
            res.json({
                status: 404,
                data: [],
                message: 'Failed to load data..!'
            });
        }
    }).catch(function(err) {
        console.log(err);
    });     
};

/**
 * Author Kaustubh Mishra
 * Get Cart Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.deleteCart = function(req, res) {
    var productResult = '';
    db.models.shopping_cart.destroy({
        where:{
            id: req.body.shoppingId
        },
        include: [{
            model: db.models.cart_item,
            include:[{
                model: db.models.products
            }]
        }]
    }).then(function (productData){
        if(productData) {
            db.models.cart_item.destroy({
                where:{
                    shoppingCartId: req.body.shoppingId
                }
            }).then(function(success){
                db.models.order_details.destroy({
                where:{
                    product_id: req.body.productId
                }
            }).then(function(cartSuccess){
                res.json({
                status: 200,
                data: [],
                message: 'Cart data deleted successfully.!'
            })
            });
        });
        }
        else {
            res.json({
                status: 404,
                data: null,
                message: 'Failed to load data..!'
            });
        }
    }).catch(function(err) {
        console.log(err);
    });     
};

/**
 * Author Kaustubh Mishra
 * Get Product Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.updateCartProduct = function(req, res) {
    console.log("Request come for update1", req.params);
    db.models.products.findOne({
        where:{
            id: req.body.product_id
        }
    }).then(function(data){
        if(data) {
            var cartData = {};
            cartData.quantity = req.body.productQuantity;
            cartData.price = req.body.productQuantity * data.dataValues.Price;
            db.models.cart_item.update(cartData, {
                where:{
                    shoppingCartId: req.params.shoppingId
                }
            }).then(function(productData) {
                updateOrderDetail(req.body.productId, cartData.price, cartData.quantity, function(respone){
                    if(respone){
                        res.json({
                            status: 200,
                            data: [],
                            message: 'Product quantity updated successfully.'
                        });    
                    } else {
                        res.json({
                            status: 401,
                            data: [],
                            message: 'Failed to update product quantity.'
                        });
                    }
                })
            });         
        }
    })
};

var orderDetail = function(product_id, product_price, product_quantity, product_size, product_color, callback) {
    var orderDetail = {};
    orderDetail.product_id = product_id;
    orderDetail.price = product_price;
    orderDetail.quantity = product_quantity;
    orderDetail.total = product_price * product_quantity;
    orderDetail.size = product_size;
    orderDetail.color = product_color;
    db.models.order_details.create(orderDetail).then(function(data) {
        if(data) {
            callback(data); 
        } else {
            callback(null);
        }
    });
};

var updateOrderDetail = function(product_id, product_price, product_quantity, callback) {
    var updateOrder = {};
    updateOrder.price = product_price;
    updateOrder.quantity = product_quantity;
    updateOrder.total = product_price;
    console.log("updateOrder----", updateOrder)
    db.models.order_details.update(updateOrder,{
        where:{
            product_id:product_id
        }
    }).then(function(data) {
        if(data) {
            callback(data); 
        } else {
            callback(null);
        }
    });
};

/**
 * Author Kaustubh Mishra
 * Get Product Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.getCartSummary = function(req, res) {

    db.query("SELECT  SUM(total) AS TOTAL FROM order_details",
    {
      type: sequelizeDb.QueryTypes.SELECT
    }).then(function(orderData){
        if(orderData) {
            res.json({
                status: 200,
                data: orderData,
                message: 'Cart summary loaded successfully.'
            });
        } else {
            res.json({
                status: 401,
                data: [],
                message: 'Failed to load cart summary.'
            });
        }
    })
};

/**
 * Author Kaustubh Mishra
 * Get Product Info from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Info
*/

exports.addUser = function(req, res) {
    var userData = {};
    userData.firstName = req.body.user.firstName;
    userData.lastName = req.body.user.lastName;
    userData.email = req.body.user.email;
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
                sendEmailUser(user);
                addUserProduct(user.id, cart, function(respone){
                    if(respone) {
                        callback({
                            status: 200,
                            data: respone,
                            message: 'Your order has been placed successfully.'
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
        to:      'kaustubh@squats.in',
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

