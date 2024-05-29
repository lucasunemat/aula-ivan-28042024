const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
swaggerDocument(app);

/**
 * @swagger
 * /users:  
 *  get:
 *      description: Use to request all users
 *      responses:
 *          200:
 *              description: A successful response
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 */

app.get('/users', (req, res) => {
    res.json({
        message: 'List of users'
    });
})

/**
    * @swagger
    * /users:
    *  post:
    *      description: Use to create a new user
    *      responses:
    *          201:
    *              description: A successful response
    *              content:
    *                  application/json:
    *                      schema:
    *                          type: object
    *                          properties:
    *                              message:
    *                                  type: string
    */
app.put('/users/:id', (req, res) => {
    res.json({
        message: 'User updated'
    });
})

app.listen('3000', () => {
    console.log('Server is running on port 3000');
});



