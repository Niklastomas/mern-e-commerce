import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productRouter from './routes/productRoutes.js';

dotenv.config();

const app = express();

connectDB();

// Routes
app.use('/api/products', productRouter);

// Middlewares
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
