import express from 'express';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';
import orderRouter from './routes/order.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRoute);

export default app;
