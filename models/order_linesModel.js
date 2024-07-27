const mongoose = require('mongoose');

const order_linesSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
   // required: [true, 'Order_liness must belong to a Product!']
  },
  order: {
    type: mongoose.Schema.ObjectId,
    ref: 'Order',
    required: [true, 'Order_liness must belong to an Order!']
  },
  price: {
    type: Number,
    require: [true, 'Order_liness must have a price.']
  },
  quantity: {
    type: Number,
    default: 0,
    
  },
  
  paid: {
    type: Boolean,
    default: true
  }
});

order_linesSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'product',
    select: 'name'
  });
  next();
});

const Order_lines = mongoose.model('Order_lines', order_linesSchema);

module.exports = Order_lines;
