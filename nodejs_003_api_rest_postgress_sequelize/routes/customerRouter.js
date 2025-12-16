import { Router } from "express";
import { getCustomers, getOneCustomer, createCustomer, editCustomer, deleteCustomer } from "../controllers/customerController.js";

const router = Router();


//6 definir los routers

router.get('/customers', getCustomers);
router.post('/customers', createCustomer);
router.put('/customers/:id', editCustomer);
router.delete('/customers/:id', deleteCustomer);
router.get('/customers/:id', getOneCustomer);


export default router