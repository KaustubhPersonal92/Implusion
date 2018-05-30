 'use strict';

var db = require('../../../../config/sequelize').db;
var generalConfig = require('../../../../config/generalConfig');
var async = require('async');


/**
 * Author Kaustubh Mishra
 * Get Product Images from db
 * @param  {obj}   req
 * @param  {obj}   res
 * @method GET
 * @return json for Product Images
*/

exports.getProductImages = function(req, res) {
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
        console.log("productData---", productData)
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
    console.log("req.body---", req.body)
    var cartData = {};
    cartData.quantity = req.body.quantity;
    cartData.productId = req.body.productId;
    cartData.userId = req.body.userId;

    db.models.shopping_cart.create(cartData).then(function(productData) {
        console.log("productData---", productData.dataValues)
        if(productData) {
            var cartItem = {};
            cartItem.productId = req.body.productId;
            cartItem.quantity = req.body.quantity;
            cartItem.shoppingCartId = productData.id;
            db.models.cart_item.create(cartItem).then(function (respone) {
                res.json({
                    status: 200,
                    data: productData,
                    message: 'Product info loaded successfully.'
                }); 
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
                            "shoppingCartId": productData[item].dataValues.cart_items[i].shoppingCartId,
                            "productName": productData[item].dataValues.cart_items[i].product.dataValues.Name,
                            "productPrice": productData[item].dataValues.cart_items[i].product.dataValues.Price,
                            "productImage": productData[item].dataValues.cart_items[i].product.dataValues.Product_Image,
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
            id: req.params.shoppingId
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
                    shoppingCartId: req.params.shoppingId
                }
            }).then(function(success){
                res.json({
                status: 200,
                data: [],
                message: 'Cart data deleted successfully.!'
            });    
            })
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
