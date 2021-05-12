import express from 'express';
import { getTaxClasses, getTaxClassesById } from '../controllers/taxClassesController';
const router = express.Router();

router.route('/').get(getTaxClasses);
router.route('/:id').get(getTaxClassesById);

export default router;
