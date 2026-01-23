import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /runs : démarre une session de jeu
router.post('/', async (req, res) => {
  const { userId, levelId } = req.body;
  if (!userId || !levelId) return res.status(400).json({ error: 'userId et levelId requis.' });
  try {
    const run = await prisma.run.create({
      data: {
        userId,
        levelId,
      },
    });
    res.status(201).json(run);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la session.' });
  }
});

// GET /runs/:id : détail d'une session de jeu
router.get('/:id', async (req, res) => {
  const runId = parseInt(req.params.id, 10);
  if (isNaN(runId)) return res.status(400).json({ error: 'ID de session invalide.' });
  try {
    const run = await prisma.run.findUnique({
      where: { id: runId },
      include: { attempts: true },
    });
    if (!run) return res.status(404).json({ error: 'Session non trouvée.' });
    res.json(run);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la session.' });
  }
});

export default router;
