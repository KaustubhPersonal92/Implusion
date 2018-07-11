var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var user = sequelize.define('user', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            pincode: DataTypes.STRING,
            contactNumber: DataTypes.STRING,
            country: DataTypes.STRING,
        }, 
        {
            freezeTableName: true,
            tableName: 'user',
            timestamps: false,     
            paranoid: true
        }
    );
    return user;
};
