const express = require('express');
const cors = require('cors');

const app = express();


//2. habilitar cors y json para consultas
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


const router = require('./routers/customerRouter.js');
app.use('/api/customers', router);

//3. testing
app.get('/', (req, res)=> {
    res.json({message: 'hello form rest ap'})
});

//port 
const PORT = process.env.PORT || 8080;
// server
app.listen(PORT, () => {
    console.log('SERVE ', PORT);
});