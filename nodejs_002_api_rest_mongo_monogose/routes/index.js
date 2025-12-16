const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');





/** 
 * @openapi
 * /api/customers/get-all:
 *   get:
 *      tags:
 *         - customers
 *      responses:
 *         '201':
 *              description: OK
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: OK
 *                          data:
 *                             type: array  
 *                             items:
 *                               type: object
*/

/** 
 * @openapi
 * /api/customers/getOne/{id}:
 *   get:
 *      tags:
 *         - customers
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID del cliente
 *           schema:
 *             type: string
 *      responses:
 *         '200':
 *              description: OK
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: OK
 *                          data:
 *                             $ref: '#/components/schemas/Customer'
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "63f280d74b9d8e86a538187b"
 *         name:
 *           type: string
 *           example: "Luis Alberto Zacarias"
 *         email:
 *           type: string
 *           example: "correo@example.com"
 *         tel:
 *           type: string
 *           example: "22234244"
 *         address:
 *           type: string
 *           example: "San Matías"
 *         kind:
 *           type: string
 *           example: "men"
 *         category:
 *           type: string
 *           example: "suscription"
 *         registerDate:
 *           type: string
 *           example: "11 de julio"
 *         __v:
 *           type: integer
 *           example: 0
 */


/** 
 * @openapi
 * /api/customers:
 *   post:
 *      tags:
 *         - customers
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/NewCustomerInput'
 *      responses:
 *         '201':
 *              description: Customer created successfully
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: OK
 *                          message:
 *                              type: string
 *                              example: The customer was added successfully
 *         '500':
 *              description: Internal Server Error
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: Error
 *                          error:
 *                              type: string
 *                              example: Message error
 * components:
 *   schemas:
 *     NewCustomerInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Luis Alberto Zacarias
 *         email:
 *           type: string
 *           example: correo@example.com
 *         tel:
 *           type: string
 *           example: 22234244
 *         address:
 *           type: string
 *           example: San Matías
 *         kind:
 *           type: string
 *           example: men
 *         category:
 *           type: string
 *           example: suscription
 *         registerDate:
 *           type: string
 *           example: 11 de julio
 */


/** 
 * @openapi
 * /api/customers/{id}:
 *   put:
 *      tags:
 *         - customers
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID del cliente que se va a actualizar
 *           schema:
 *             type: string
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/UpdateCustomerInput'
 *      responses:
 *         '201':
 *              description: Customer updated successfully
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: OK
 *                          data:
 *                             $ref: '#/components/schemas/Customer'
 *         '500':
 *              description: Internal Server Error
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: Error
 *                          error:
 *                              type: string
 *                              example: Message error
 * components:
 *   schemas:
 *     UpdateCustomerInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Nuevo nombre
 *         email:
 *           type: string
 *           example: nuevo_correo@example.com
 *         tel:
 *           type: string
 *           example: 12345678
 *         address:
 *           type: string
 *           example: Nueva dirección
 *         kind:
 *           type: string
 *           example: mujer
 *         category:
 *           type: string
 *           example: nueva_suscripcion
 *         registerDate:
 *           type: string
 *           example: 1 de enero
 *     Customer:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "63f280d74b9d8e86a538187b"
 *         name:
 *           type: string
 *           example: Luis Alberto Zacarias
 *         email:
 *           type: string
 *           example: correo@example.com
 *         tel:
 *           type: string
 *           example: 22234244
 *         address:
 *           type: string
 *           example: San Matías
 *         kind:
 *           type: string
 *           example: men
 *         category:
 *           type: string
 *           example: suscripcion
 *         registerDate:
 *           type: string
 *           example: 11 de julio
 */

/** 
 * @openapi
 * /api/customers/{id}:
 *   delete:
 *      tags:
 *         - customers
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID del cliente que se va a eliminar
 *           schema:
 *             type: string
 *      responses:
 *         '201':
 *              description: Customer deleted successfully
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: OK
 *                          message:
 *                              type: string
 *                              example: El cliente se ha eliminado
 *         '500':
 *              description: Internal Server Error
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                          status:
 *                              type: string
 *                              example: Error
 *                          error:
 *                              type: string
 *                              example: Message error
 */


module.exports = function () {

    //6. Agrega nuevos clientes via Post
    router.post('/customers',
        customersController.newCustomer);

    //9. obtener clientes
    router.get('/customers/get-all',
        customersController.getCustomers);

    router.get('/customers/get-one/:id',
        customersController.getOneCustomer);

    //13. Actualizar un cliente 
    router.put('/customers/:id',
        customersController.updateCustomer);

    //15. eliminar un cliente por id
    router.delete('/customers/:id',
        customersController.deleteCustomer);

    return router;
}