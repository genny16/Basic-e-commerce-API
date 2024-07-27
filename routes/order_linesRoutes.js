const express = require('express');
const order_linesController = require('./../controllers/order_linesController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

//router.get('/checkout-session/:productId', order_linessController.getCheckoutSession);

//router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(order_linesController.getAllOrder_lines)
  .post(order_linesController.createOrder_lines);

router
  .route('/:id')
  .get(order_linesController.getOrder_lines)
  .patch(order_linesController.updateOrder_lines)
  .delete(order_linesController.deleteOrder_lines);

module.exports = router;
