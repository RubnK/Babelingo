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

// Les routes gameplay seront ajoutées ici

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Service gameplay démarré sur le port ${PORT}`);
});
