const db = require('../models');

const Customer = db.customers;

//agrega info
const addCustomer = async (req, res) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
        tel: req.body.tel,
        address: req.body.address,
        kind: req.body.kind,
        category: req.body.category,
        // _id: req.body._id,
        registerDate: req.body.registerDate,
    }

    //inserta los datos
    const customer = await Customer.create(info);
    res.status(200).send(customer);
}
//obtine todos los productos
const getAllCustomers = async (req, res) => {
    let customers = await Customer.findAll({});

    res.status(200).send(customers);
}

//obtine solo un producto
const getOneCustomer = async (req, res) => {
    try {
        const customer = await Customer.findOne({ where: { id: req.params.id } });
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//edicion y actualizacion
const updateCustomer = async (req, res) => {
    const id = req.params.id;
    try {
        const [updated] = await Customer.update(req.body, {
            where: { id: id },
        });

        if (updated === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado o sin cambios aplicados' });
        }

        const updatedCustomer = await Customer.findByPk(id);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente', error: error.message });
    }
};


//eliminacion d un producto
const deleteCustomer = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Customer.destroy({ where: { id: id } });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.status(200).json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el cliente', error: error.message });
    }
};



module.exports= {
    addCustomer,
    getAllCustomers,
    getOneCustomer,
    updateCustomer,
    deleteCustomer,
}