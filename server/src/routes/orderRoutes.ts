import express from 'express';
import {
  deleteOrder,
  getOrders,
  getOrdersById,
  updateOrder,
} from '../controllers/ordersController';
const router = express.Router();

router.route('/').get(getOrders);
router.route('/:id').get(getOrdersById).put(updateOrder).delete(deleteOrder);

export default router;
