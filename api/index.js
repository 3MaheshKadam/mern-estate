import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routers/user.router.js';
import authRouter from './routers/auth.router.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO, {
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express();
app.use(express.json());


app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Error handling middleware should be defined last
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  console.error('Error middleware caught:', err);
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

