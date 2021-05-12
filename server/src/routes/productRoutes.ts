import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
} from '../controllers/productsController';
const router = express.Router();

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductsById).delete(deleteProduct);

export default router;
