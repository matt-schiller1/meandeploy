const mongoose = require('mongoose');
let Product = mongoose.model('Product');

module.exports = {
  index: (req, res) => {
    Product.find({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json({ Error: err });
      });
  },
  add: (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save(err => {
      if (err) {
        console.log(err);
        res.status(403).json(Object.keys(err.errors).map(key =>
          err.errors[key].message)
        );
      } else {
        res.json({ Success: req.body });
        console.log("product added!");
      }
    })
  },
  update: (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
      if (err) {
        console.log(err);
        res.json(Object.keys(err.errors).map(key =>
          err.errors[key].message)
        );
      } else {
        res.json(updatedProduct);
      }
    })
  },
  display: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ Error: err })
      });
  },
  destroy: (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(deleteProduct => {
        res.json(deleteProduct)
      })
      .catch(err => {
        res.status(500).json(err);
      })
  },
}
