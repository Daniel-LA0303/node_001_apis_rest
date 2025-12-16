module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '1234',
    DB: 'node_001_db_api_customers',
    dialect : 'mysql',

    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}