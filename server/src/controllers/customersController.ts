import asyncHandler from 'express-async-handler';
import { wooCommerce } from '../config/api';

// @desc fetch all the customers
// @desc GET /api/customers
// @access Public
const getCustomers = asyncHandler(async (_, res) => {
  const customers = await wooCommerce.get('customers');
  const resp = await customers.data;

  if (customers) res.json(resp);
  else {
    res.status(404);
    throw new Error('Algo salio mal intentalo de nuevo');
  }
});

// @desc fetch a single customers
// @desc GET /api/customers/:id
// @access Public
const getCustomersById = asyncHandler(async (req, res) => {
  const customer = await wooCommerce.get(`customers/${req.params.id}`);
  const resp = await customer.data;

  if (customer) {
    res.json(resp);
  } else {
    res.status(404);
    throw new Error('Cliente no encontrada');
  }
});

export { getCustomers, getCustomersById };
