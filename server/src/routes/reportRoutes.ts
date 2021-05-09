import express from 'express';
import {
    getAllReports,
    getSalesReport
} from '../controllers/reportsController';
const router = express.Router();

router.route('/').get(getAllReports);
router.route('/sales').get(getSalesReport);

export default router;
