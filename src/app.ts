import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import errorMiddleware from './middlewares/error.middlewares';
import 'reflect-metadata';
import routesV1 from './routes/v1';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(hpp());
app.use(compression());

app.use('/api/v1', routesV1);

app.use(errorMiddleware);

export default app;
