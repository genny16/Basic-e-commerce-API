const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
 
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Order must belong to a User!']
  },
  
  createdAt: {
    type: Date,
    default: Date.now()
  },
  paid: {
    type: Boolean,
    default: true
  }
});

orderSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name'
  });
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
