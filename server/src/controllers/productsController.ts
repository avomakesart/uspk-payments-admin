import asyncHandler from 'express-async-handler';
import { wooCommerce } from '../config/api';

// @desc fetch all the products
// @desc GET /api/products
// @access Public
const getProducts = asyncHandler(async (_, res) => {
  const products = await wooCommerce.get('products');
  const resp = await products.data;

  if (products) res.json(resp);

  res.status(404);
  throw new Error('Algo salio mal intentalo de nuevo');
});

// @desc fetch a single products
// @desc GET /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await wooCommerce.get(`products/${req.params.id}`);
  const resp = await product.data;

  if (product) {
    res.json(resp);
  } else {
    res.status(404);
    throw new Error('Producto no encontrado');
  }
});

// @desc fetch a single products
// @desc POST /api/products
// @access Public
const createProduct = asyncHandler(async (req, res) => {
  const data = {
    name: req.body.name,
    regular_price: req.body.regular_price,
    description: req.body.description,
    short_description: req.body.short_description,
    categories: [
      {
        id: req.body.id,
      },
    ],
    dimensions: [
      {
        length: req.body.length,
        width: req.body.width,
        height: req.body.height,
      },
    ],
    images: [
      {
        src: req.body.src,
      },
    ],
  };

  const product = await wooCommerce.post(`products`, data);
  const resp = await product.data;

  if (product) {
    res.json(resp);
  } else {
    res.status(404);
    throw new Error('Producto no encontrado');
  }
});

// @desc fetch a single products
// @desc UPDATE /api/products/:id
// @access Public
//   const updateOrder = asyncHandler(async (req, res) => {
//     const { status } = req.body;

//     const order = await wooCommerce.put(`orders/${req.params.id}`, { status });
//     const resp = await order.data;

//     if (order) res.json(resp);

//     res.status(404);
//     throw new Error('Orden no encontrada');
//   });

// @desc fetch a single products
// @desc DELETE /api/products/:id
// @access Public
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await wooCommerce.delete(`products/${req.params.id}`, {
    force: true,
  });
  const resp = await product.data;

  if (product) res.json(resp);

  res.status(404);
  throw new Error('Producto no encontrada');
});

export { createProduct, getProducts, getProductsById, deleteProduct };
