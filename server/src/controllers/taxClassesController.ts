import asyncHandler from 'express-async-handler';
import { wooCommerce } from '../config/api';

// @desc fetch all the taxes
// @desc GET /api/taxes/classes
// @access Public
const getTaxClasses = asyncHandler(async (_, res) => {
  const taxes = await wooCommerce.get('taxes');
  const resp = await taxes.data;

  if (taxes) res.json(resp);

  res.status(404);
  throw new Error('Algo salio mal intentalo de nuevo');
});

// @desc fetch a single tax
// @desc GET /api/taxes/classes/:id
// @access Public
const getTaxClassesById = asyncHandler(async (req, res) => {
  const tax = await wooCommerce.get(`taxes/${req.params.id}`);
  const resp = await tax.data;

  if (tax) {
    res.json(resp);
  } else {
    res.status(404);
    throw new Error('Impuesto no encontrado');
  }
});

export { getTaxClasses, getTaxClassesById };
