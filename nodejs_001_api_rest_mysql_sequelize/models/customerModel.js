module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define("customer", {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING
        },
        tel: {
            type: DataTypes.TEXT
        },
        address: {
            type: DataTypes.STRING
        },
        kind: {
            type: DataTypes.TEXT
        },
        category: {
            type: DataTypes.TEXT
        },
        _id:{
            type: DataTypes.STRING,
        },
        registerDate:{
            type: DataTypes.TEXT
        }
    });

    return Customer;
}