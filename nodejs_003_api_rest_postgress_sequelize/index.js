import express from "express";
import {sequelize} from './config/db.js'
import router from "./routes/customerRouter.js";
import cors from "cors"
import './models/Customer.js'

async function main() {

    try {
        await sequelize.sync({
            force: false
        }).then(() => {
            console.log('yes re-sync done!...');
        }); //aqui se ejecuta para crear las tablas

        const app = express();
        //luego arranca el servidor
        app.use(cors());
        app.use(express.json());
        app.use('/api', router);
        app.listen(8080);
        
        console.log('server in port 8000');
    } catch (error) {
        console.log('error in the conexion');
    }

}

main();
