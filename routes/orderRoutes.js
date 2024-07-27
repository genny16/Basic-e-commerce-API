const express = require('express');
const orderController = require('./../controllers/orderController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

//router.get('/checkout-session/:productId', orderController.getCheckoutSession);

//router.use(authController.restrictTo('admin', 'lead-guide'));


router
  .route('/')
  .get(orderController.getAllOrders)
  .post(
    authController.restrictTo('user'),
    orderController.setUserId,
    orderController.createOrder
  );

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(
    authController.restrictTo('user'),
    orderController.updateOrder
  )
  .delete(
    authController.restrictTo('user'),
    orderController.deleteOrder
  );

module.exports = router;

