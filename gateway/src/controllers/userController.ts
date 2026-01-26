import { Request, Response } from "express";
import axios from "axios";

export async function getUserXP(req: Request, res: Response) {
  const userId = parseInt(String(req.params.id), 10);
  if (isNaN(userId))
    return res.status(400).json({ error: "ID utilisateur invalide." });
  try {
    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user)
      return res.status(404).json({ error: "Utilisateur non trouvé." });
    res.json({ id: user.id, xp: user.xp ?? 0 });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération de l’XP." });
  }
}

export async function patchUserXP(req: Request, res: Response) {
  const userId = parseInt(String(req.params.id), 10);
  const { xp } = req.body;
  if (isNaN(userId) || typeof xp !== "number")
    return res.status(400).json({ error: "ID utilisateur ou XP invalide." });
  try {
    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();
    const user = await prisma.user.update({
      where: { id: userId },
      data: { xp: { increment: xp } },
    });
    res.json({ id: user.id, xp: user.xp });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de l’XP." });
  }
}
