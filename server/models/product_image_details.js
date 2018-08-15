var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var products = sequelize.define('products', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            Name: DataTypes.STRING,
            Price: DataTypes.STRING,
            Availability: DataTypes.STRING,
            Product_Image: DataTypes.STRING,
            Updated_By: DataTypes.STRING,
            Last_Updated: DataTypes.STRING,
            IsActive: DataTypes.INTEGER
        }, 
        {
            freezeTableName: true,
            tableName: 'products',
            timestamps: false,     
            paranoid: true,
            associate: function(models) {
                products.hasMany(models.cart_item,{
                    foreignKey: 'productId'                        
                }),
                products.hasMany(models.order_details,{
                    foreignKey: 'product_id'                        
                })
            }
        }
    );
    return products;
};
