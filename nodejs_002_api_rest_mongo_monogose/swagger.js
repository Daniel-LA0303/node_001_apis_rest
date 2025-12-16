const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Customers API',
            version:'1.0.0',
        }
    },
    apis:["./routes/index.js"]
}

const swaggerSpec = swaggerJSDoc(options);


const swaggerDocs = (app, port) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, { explorer: true }));

    app.get('/api/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log("Swagger UI running on http://localhost:" + port + "/api-docs");
}


module.exports = {swaggerDocs};