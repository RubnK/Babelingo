import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});


import levelsRouter from './routes/levels';
app.use('/levels', levelsRouter);

import runsRouter from './routes/runs';
app.use('/runs', runsRouter);

import attemptsRouter from './routes/attempts';
app.use('/attempts', attemptsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Service gameplay démarré sur le port ${PORT}`);
});
