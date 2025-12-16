const Customers = require('../models/customersModel');

//7. agrega un nuevo cliente
exports.newCustomer = async (req, res, next) => {
    const customer = new Customers(req.body);
    
    try {
        //almacenar el registro
        await customer.save();
        res.status(201).json({mensaje: 'The customer was added successfully'});
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            error: 'Message error'
          });
    }
}

//10. muestra todos los clientes
exports.getCustomers = async(req, res, next) => {

    try {
        const customers = await Customers.find({});
        res.status(201).json({
            status: 'OK',
            data: customers
          });
    } catch (error) {   
        res.status(500).json({
            status: 'Error',
            error: 'Message error'
          });
    }
}

exports.getOneCustomer = async(req, res, next) => {
    try {
        const customer = await Customers.findById(req.params.id);
        //mostrar el cliente 
        res.status(201).json({
            status: 'OK',
            data: customer
          });
        
    } catch (error) {
        res.json({mensaje: 'This customer does not exist'});
        res.status(500).json({
            status: 'Error',
            error: 'Message error'
          });
    }
}

//14. actualiza un ciente por su id
exports.updateCustomer = async(req, res, next) => {
    try {
        const customer = await Customers.findOneAndUpdate(
            {id : req.params.id}, 
            req.body, 
            {new: true}
        );
        res.status(201).json({
            status: 'OK',
            data: customer
          });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            error: 'Message error'
          });
    }
}
//16. eliminar un cliente por id
exports.deleteCustomer = async(req, res, next) => {
    try {
        await Customers.findOneAndDelete(
            {id : req.params.id}
        )
        res.status(201).json({mensaje: 'This customer was deleted successfully'})
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            error: 'Message error'
        });
    }
}