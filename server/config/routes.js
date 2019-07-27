const products = require('../controllers/products.js');

module.exports = function (app) {
  app.get('/products', products.index);
  app.get('/:id', products.display);
  app.post('/products/new', products.add);
  app.put('/update/:id', products.update);
  app.delete('/remove/:id', products.destroy);
}
