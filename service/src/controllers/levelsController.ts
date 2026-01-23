import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllLevels(_req: Request, res: Response) {
  try {
    const levels = await prisma.level.findMany();
    res.json(levels);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des niveaux.' });
  }
}

export async function getQuestionsByLevel(req: Request, res: Response) {
  const levelId = parseInt(String(req.params.id), 10);
  if (isNaN(levelId)) return res.status(400).json({ error: 'ID de niveau invalide.' });
  try {
    const questions = await prisma.question.findMany({ where: { levelId } });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des questions.' });
  }
}
