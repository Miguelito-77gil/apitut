import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import hpp from 'hpp';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (_req, res) => {
  res.json({
    status: 'success',
    message: 'Application is running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'success',
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
  });
});

app.use((_req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
});

export default app;
