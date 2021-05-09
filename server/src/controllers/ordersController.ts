import asyncHandler from 'express-async-handler';
import { wooCommerce } from '../config/api';

// @desc fetch all the orders
// @desc GET /api/orders
// @access Public
const getOrders = asyncHandler(async (_, res) => {
  const orders = await wooCommerce.get('orders');
  const resp = await orders.data;

  if (orders) res.json(resp);
  else {
    res.status(404);
    throw new Error('Algo salio mal intentalo de nuevo');
  }
});

// @desc fetch a single orders
// @desc GET /api/orders/:id
// @access Public
const getOrdersById = asyncHandler(async (req, res) => {
  const order = await wooCommerce.get(`orders/${req.params.id}`);
  const resp = await order.data;

  if (order) {
    res.json(resp);
  } else {
    res.status(404);
    throw new Error('Orden no encontrada');
  }
});

// @desc fetch a single orders
// @desc DELETE /api/orders/:id
// @access Public
const updateOrder = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const order = await wooCommerce.put(`orders/${req.params.id}`, { status });
  const resp = await order.data;

  if (order) res.json(resp);

  res.status(404);
  throw new Error('Orden no encontrada');
});

// @desc fetch a single orders
// @desc DELETE /api/orders/:id
// @access Public
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await wooCommerce.delete(`orders/${req.params.id}`, {
    force: true,
  });
  const resp = await order.data;

  if (order) res.json(resp);

  res.status(404);
  throw new Error('Orden no encontrada');
});

export { getOrders, getOrdersById, deleteOrder, updateOrder };
