const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();

// Middlewares
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.send('Not Found');
  }
});

app.listen(5000, console.log('Server is running on port 5000'));
