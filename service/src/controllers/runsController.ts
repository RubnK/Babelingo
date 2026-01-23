import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createRun(req: Request, res: Response) {
  const { userId, levelId } = req.body;
  if (!userId || !levelId) return res.status(400).json({ error: 'userId et levelId requis.' });
  try {
    const run = await prisma.run.create({
      data: { userId, levelId },
    });
    res.status(201).json(run);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la session.' });
  }
}

export async function getRunById(req: Request, res: Response) {
  const runId = parseInt(String(req.params.id), 10);
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
}

export async function getRunsByUser(req: Request, res: Response) {
  const userId = parseInt(String(req.params.id), 10);
  if (isNaN(userId)) return res.status(400).json({ error: 'userId requis.' });
  try {
    const runs = await prisma.run.findMany({
      where: { userId },
      include: { attempts: true, level: true },
      orderBy: { startedAt: 'desc' }
    });
    res.json(runs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des sessions.' });
  }
}
