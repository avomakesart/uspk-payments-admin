import express from 'express';
import {
  getCustomers,
  getCustomersById,
} from '../controllers/customersController';
const router = express.Router();

router.route('/').get(getCustomers);
router.route('/:id').get(getCustomersById);

export default router;
