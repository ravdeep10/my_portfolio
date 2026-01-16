import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import publicRoutes from './routes/public.routes.js';
import {errorHandler} from './middlewares/error.middleware.js';
import authRoutes from './routes/auth.routes.js';
import adminRoutes from './routes/admin.routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth',authRoutes)
app.use('/api/public', publicRoutes);
app.use('/api/admin',adminRoutes)

app.use(errorHandler);

export default app;


