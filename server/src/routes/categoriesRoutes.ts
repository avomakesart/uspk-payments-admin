import express from 'express';
import {
  getCategories,
  getCategoriesById,
} from '../controllers/categoriesController';
const router = express.Router();

router.route('/').get(getCategories);
router.route('/:id').get(getCategoriesById);

export default router;
