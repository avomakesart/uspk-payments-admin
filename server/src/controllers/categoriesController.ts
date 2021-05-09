import asyncHandler from 'express-async-handler';
import { wooCommerce } from '../config/api';

// @desc fetch all the categories
// @desc GET /api/products/categories
// @access Public
const getCategories = asyncHandler(async (_, res) => {
  const products = await wooCommerce.get('products/categories');
  const resp = await products.data;

  if (products) res.json(resp);

  res.status(404);
  throw new Error('Algo salio mal intentalo de nuevo');
});

// @desc fetch a single products
// @desc GET /api/products/categories/:id
// @access Public
const getCategoriesById = asyncHandler(async (req, res) => {
  const product = await wooCommerce.get(`products/categories/${req.params.id}`);
  const resp = await product.data;

  if (product) {
    res.json(resp);
  } else {
    res.status(404);
    throw new Error('Categoria no encontrado');
  }
});

export { getCategories, getCategoriesById };
