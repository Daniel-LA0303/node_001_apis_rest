import Sequelize from "sequelize";
//configurar la db

export const sequelize = new Sequelize(
    'node_001_db_api_customers', 
    'postgres' , 
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
)