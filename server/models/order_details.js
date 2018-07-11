var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var order_details = sequelize.define('order_details', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            order_id: DataTypes.STRING,
            product_id: DataTypes.STRING,
            price: DataTypes.STRING,
            quantity: DataTypes.STRING,
            total: DataTypes.STRING,
            size: DataTypes.STRING,
            color: DataTypes.STRING
        }, 
        {
            freezeTableName: true,
            tableName: 'order_details',
            timestamps: false,     
            paranoid: true
        }
    );
    return order_details;
};
