import connectRedis from 'connect-redis';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import path from 'path';

import { COOKIE_NAME, __prod__ } from './constants';
import orderRoutes from './routes/orderRoutes';
import productRoutes from './routes/productRoutes';
import customerRoutes from './routes/customerRoutes';
import reportRoutes from './routes/reportRoutes';
import categoriesRoutes from './routes/categoriesRoutes';
// import userRoutes from './routes/userRoutes';

const main = async () => {
  dotenv.config();

  // connectDB();

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.set('proxy', 1);
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax',
        secure: __prod__,
        domain: __prod__ ? '.alvarocastle.com' : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  app.use(express.json());

  app.get('/', (_, res) => {
    res.send('API is running...');
  });
  app.use('/api/orders', orderRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/customers', customerRoutes);
  app.use('/api/reports', reportRoutes);
  app.use('/api/categories', categoriesRoutes);
  // app.use('/api/users', userRoutes);

  const __dirname = path.resolve();

  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (_, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
  } else {
    app.get('/', (_, res) => {
      res.send('API is running...');
    });
  }

  const PORT = process.env.PORT || 7000;

  app.listen(PORT, () => {
    console.log(
      `Server started on http://localhost:${parseInt(process.env.PORT)}`
    );
  });
};

main().catch((err) => console.error(err));
