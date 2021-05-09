import express from 'express';
import {
  deleteProduct,
  getProducts,
  getProductsById,
} from '../controllers/productsController';
const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById).delete(deleteProduct);

export default router;
