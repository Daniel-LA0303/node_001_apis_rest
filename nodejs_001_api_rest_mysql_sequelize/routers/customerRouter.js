const productController = require('../controllers/customerController.js');

const router = require('express').Router();

router.post('/add-customer', productController.addCustomer)

router.get('/all-customers', productController.getAllCustomers);

router.get('/:id', productController.getOneCustomer);

router.put('/:id', productController.updateCustomer);

router.delete('/:id', productController.deleteCustomer);


module.exports = router;