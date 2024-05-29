const swaggerJsDOc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    openapi: '3.0.0',
    swaggerDefinition: {
        info: {
            title: 'Customer API',
            description: 'Customer API Information',
            contact: {
                name: 'Amazing Developer'
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./app.js'] //onde estão as rotas?
}

const swaggerDocs = swaggerJsDOc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}


