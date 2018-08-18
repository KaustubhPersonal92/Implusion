var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var cart_item = sequelize.define('cart_item', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            productId: DataTypes.STRING,
            price: DataTypes.STRING,
            quantity: DataTypes.STRING,
            shoppingCartId: DataTypes.STRING,
            total: DataTypes.STRING,
            size: DataTypes.STRING,
            color: DataTypes.STRING,
            createdDate: DataTypes.STRING
        }, 
        {
            freezeTableName: true,
            tableName: 'cart_item',
            timestamps: false,     
            paranoid: true,
            associate: function(models) {
                cart_item.belongsTo(models.shopping_cart, {
                    foreignKey: 'shoppingCartId'                        
                }),
                cart_item.belongsTo(models.products, {
                    foreignKey: 'productId'                        
                })
            }
        }
    );
    return cart_item;
};
