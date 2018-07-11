var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var user_order = sequelize.define('user_order', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            user_id: DataTypes.STRING,
            shoppingCart_id: DataTypes.STRING,
            productName: DataTypes.STRING,
            productPrice: DataTypes.STRING,
            productImage: DataTypes.STRING,
            productQuantity: DataTypes.STRING,
            product_id: DataTypes.STRING
        }, 
        {
            freezeTableName: true,
            tableName: 'user_order',
            timestamps: false,     
            paranoid: true
        }
    );
    return user_order;
};
