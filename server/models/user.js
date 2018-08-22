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
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            contactNumber: DataTypes.STRING,
            gender: DataTypes.STRING
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
