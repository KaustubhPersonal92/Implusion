var async = require('async');
module.exports = function(sequelize, DataTypes) {

    var user_address = sequelize.define('user_address', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            user_id: DataTypes.STRING,
            address: DataTypes.STRING,
            locality: DataTypes.STRING,
            landmark: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING,
            address_type: DataTypes.STRING,
            pincode: DataTypes.STRING,
            reciever_name: DataTypes.STRING,
            contact_number: DataTypes.STRING,
            alternate_contact_number: DataTypes.STRING,
            status: DataTypes.STRING
        }, 
        {
            freezeTableName: true,
            tableName: 'user_address',
            timestamps: false,     
            paranoid: true
        }
    );
    return user_address;
};
