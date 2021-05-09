import asyncHandler from 'express-async-handler';
import { wooCommerce } from '../config/api';
import { format } from 'date-fns';

// @desc fetch all the reports
// @desc GET /api/reports
// @access Public
const getAllReports = asyncHandler(async (_, res) => {
  const reposts = await wooCommerce.get('reports');
  const resp = await reposts.data;

  if (reposts) res.json(resp);
  else {
    res.status(404);
    throw new Error('Algo salio mal intentalo de nuevo');
  }
});

// @desc fetch a single reports
// @desc GET /api/reports/sales
// @access Public
const getSalesReport = asyncHandler(async (_, res) => {
  const report = await wooCommerce.get(`reports/sales`,  {
      date_min: '2021-01-01',
      date_max: format(new Date(), 'yyyy-MM-dd')
  });

  console.log(format(new Date(), 'yyyy-MM-dd'));
  
  const resp = await report.data;

  if (report) {
    res.json(resp);
  } else {
    res.status(404);
    throw new Error('Cliente no encontrada');
  }
});

export { getAllReports, getSalesReport };
