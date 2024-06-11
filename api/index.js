import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import userRouter from './routers/user.router.js';
import authRouter from './routers/auth.router.js';
import listingRouter from './routers/listing.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname , '/client/dist')));
app.get("*" , (req, res) => {
  res.sendFile(path.join(__dirname ,'client' ,'dist' , 'index.html'));
});

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
