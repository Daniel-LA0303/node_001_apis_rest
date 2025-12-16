import { Customer } from "../models/Customer.js";

export const getCustomers = async (req, res) => {
    const customers = await Customer.findAll()

    res.send(customers);
}

export const getOneCustomer = async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await Customer.findOne({ where: { id } });
        
        if (!customer) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        res.status(200).json(customer);
    } catch (error) {
        console.error("Error al obtener cliente:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const createCustomer = async (req, res) => {
  try {
    const { name, email, tel, address, kind, category, registerDate } = req.body;

    const newCustomer = await Customer.create({
      name,
      email,
      tel,
      address,
      kind,
      category,
      registerDate
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error al crear cliente:", error);
    res.status(500).json({ message: "Error interno al crear cliente" });
  }
};


export const editCustomer = async (req, res) => {
  try {
    const id = req.params.id; 

    const [updatedRowsCount] = await Customer.update(req.body, {
      where: { id }
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    const updatedCustomer = await Customer.findOne({ where: { id } });

    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    res.status(500).json({ message: "Error interno al actualizar cliente" });
  }
};


export const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id; // usa 'id' si ese es el parámetro en la ruta

    const deletedRows = await Customer.destroy({
      where: { id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    res.status(500).json({ message: "Error interno al eliminar cliente" });
  }
};
