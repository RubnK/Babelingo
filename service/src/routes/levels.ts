import { Router } from "express";

import {
  getAllLevels,
  getQuestionsByLevel,
} from "../controllers/levelsController";

const router = Router();

/**
 * @swagger
 * /levels:
 *   get:
 *     summary: Liste tous les niveaux
 *     tags:
 *       - Levels
 *     responses:
 *       200:
 *         description: Liste des niveaux
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get("/", getAllLevels);

/**
 * @swagger
 * /levels/{id}/questions:
 *   get:
 *     summary: Liste les questions d’un niveau
 *     tags:
 *       - Levels
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du niveau
 *     responses:
 *       200:
 *         description: Liste des questions du niveau
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   question:
 *                     type: string
 */
router.get("/:id/questions", getQuestionsByLevel);

export default router;
