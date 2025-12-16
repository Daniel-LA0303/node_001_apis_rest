const dbConfig =  require('../config/db.js');
const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);


sequelize.authenticate()
    .then(() => {
        console.log('connected');
    })
    .catch(err => {
        console.log('error', err);
    });

const db ={}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

///estos seran nuestros modelos (tablas)
db.customers = require('./customerModel.js')(sequelize, DataTypes)


db.sequelize.sync({
    force: false
}).then(() => {
    console.log('yes re-sync done!...');
});


module.exports = db;