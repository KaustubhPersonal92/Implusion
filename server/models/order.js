var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var order = sequelize.define('order', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            customer_id: DataTypes.STRING,
            payment_id: DataTypes.STRING,
            order_date: DataTypes.STRING,
            ship_date: DataTypes.STRING,
            shipper_id: DataTypes.STRING
        }, 
        {
            freezeTableName: true,
            tableName: 'order',
            timestamps: false,     
            paranoid: true
        }
    );
    return order;
};
