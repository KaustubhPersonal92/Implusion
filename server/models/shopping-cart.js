var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var shopping_cart = sequelize.define('shopping_cart', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: DataTypes.STRING,
            uniqueId: DataTypes.STRING,
            product_id: DataTypes.STRING,
            createdDate: DataTypes.STRING,
        }, 
        {
            freezeTableName: true,
            tableName: 'shopping_cart',
            timestamps: false,     
            paranoid: true,
            associate: function(models) {
                shopping_cart.hasMany(models.cart_item,{
                    foreignKey: 'shoppingCartId'                        
                })
            }
        }
    );
    return shopping_cart;
};
