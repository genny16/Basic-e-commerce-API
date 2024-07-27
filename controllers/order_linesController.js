const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const Order_lines = require('../models/order_linesModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
/*
exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked product
  const product = await Product.findById(req.params.productId);
  // console.log(product);

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // success_url: `${req.protocol}://${req.get('host')}/my-products/?product=${
    //   req.params.productId
    // }&order=${req.order.id}&price=${product.price}`,
    success_url: `${req.protocol}://${req.get('host')}/my-products?alert=order_liness`,
    cancel_url: `${req.protocol}://${req.get('host')}/product/${product.slug}`,
    customer_email: req.order.email,
    client_reference_id: req.params.productId,
    line_items: [
      {
        name: `${product.name} Product`,
        description: product.summary,
        images: [
          `${req.protocol}://${req.get('host')}/img/products/${product.imageCover}`
        ],
        amount: product.price * 100,
        currency: 'usd',
        quantity: 1
      }
    ]
  });

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session
  });
});

const createOrder_linessCheckout = async session => {
  const product = session.client_reference_id;
  const order = (await Order.findOne({ email: session.customer_email })).id;
  const price = session.display_items[0].amount / 100;
  await Order_liness.create({ product, order, price });
};

exports.webhookCheckout = (req, res, next) => {
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed')
    createOrder_linessCheckout(event.data.object);

  res.status(200).json({ received: true });
};
*/

exports.createOrder_lines = factory.createOne(Order_lines);
exports.getOrder_lines = factory.getOne(Order_lines);
exports.getAllOrder_lines = factory.getAll(Order_lines);
exports.updateOrder_lines = factory.updateOne(Order_lines);
exports.deleteOrder_lines = factory.deleteOne(Order_lines);
