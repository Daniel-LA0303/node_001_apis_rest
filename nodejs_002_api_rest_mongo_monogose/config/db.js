const mongoose =  require('mongoose');
require('dotenv').config({path: '.env'});


//4.conectar db
const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('db conectada');
    } catch (error) {
        console.log('hubo un error');
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;