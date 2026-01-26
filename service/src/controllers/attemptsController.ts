import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createAttempt(req: Request, res: Response) {
  const { runId, questionId, answer, correct } = req.body;
  if (!runId || !questionId || typeof correct !== "boolean") {
    return res
      .status(400)
      .json({ error: "runId, questionId et correct requis." });
  }
  try {
    const attempt = await prisma.attempt.create({
      data: {
        runId,
        questionId,
        answer,
        correct,
      },
    });
    res.status(201).json(attempt);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de l'enregistrement de la tentative." });
  }
}

export async function patchAttempt(req: Request, res: Response) {
  const attemptId = parseInt(String(req.params.id), 10);
  if (isNaN(attemptId))
    return res.status(400).json({ error: "ID de tentative invalide." });
  const { answer, correct } = req.body;
  try {
    const attempt = await prisma.attempt.update({
      where: { id: attemptId },
      data: { answer, correct },
    });
    res.json(attempt);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la correction de la tentative." });
  }
}
