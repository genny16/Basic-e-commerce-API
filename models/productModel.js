const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A product must have a title'],
      
      trim: true,
      maxlength: [40, 'A product title must have less or equal then 40 characters'],
      minlength: [10, 'A product title must have more or equal then 10 characters']
      // validate: [validator.isAlpha, 'Product name must only contain characters']
    },
    slug: String,
   
    description: {
      type: String,
      required: [true, 'A product must have description']
    },
   
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A product must have a summary']
    },
   
    imageCover: {
      type: String,
      required: [true, 'A product must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
   
    secretProduct: {
      type: Boolean,
      default: false
    }, tags: [String],
    quantity: {
      type: Number,
      default: 0,
      select: false
    }
    
    
    
    
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// productSchema.index({ price: 1 });
productSchema.index({ price: 1, ratingsAverage: -1 });
productSchema.index({ slug: 1 });




// Virtual populate
/*
productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id'
});
*/
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
productSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// productSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// productSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });


// QUERY MIDDLEWARE
// productSchema.pre('find', function(next) {
productSchema.pre(/^find/, function(next) {
  this.find({ secretProduct: { $ne: true } });

  this.start = Date.now();
  next();
});
/*
productSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt'
  });

  next();
});
*/
productSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
// productSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretProduct: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
