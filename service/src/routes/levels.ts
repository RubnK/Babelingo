import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /levels : liste tous les niveaux
router.get('/', async (_req, res) => {
  try {
    const levels = await prisma.level.findMany();
    res.json(levels);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des niveaux.' });
  }
});

// GET /levels/:id/questions : liste les questions d’un niveau
router.get('/:id/questions', async (req, res) => {
  const levelId = parseInt(req.params.id, 10);
  if (isNaN(levelId)) return res.status(400).json({ error: 'ID de niveau invalide.' });
  try {
    const questions = await prisma.question.findMany({ where: { levelId } });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des questions.' });
  }
});

export default router;
