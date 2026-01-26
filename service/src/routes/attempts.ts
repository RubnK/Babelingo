import { Router } from "express";

import { 
  createAttempt, 
  patchAttempt 
} from "../controllers/attemptsController";

const router = Router();

/**
 * @swagger
 * /attempts:
 *   post:
 *     summary: Enregistre une tentative de réponse
 *     tags:
 *       - Attempts
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               runId:
 *                 type: integer
 *                 example: 42
 *               questionId:
 *                 type: integer
 *                 example: 10
 *               answer:
 *                 type: string
 *                 example: "Paris"
 *     responses:
 *       201:
 *         description: Tentative enregistrée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 100
 *                 runId:
 *                   type: integer
 *                   example: 42
 *                 questionId:
 *                   type: integer
 *                   example: 10
 *                 answer:
 *                   type: string
 *                   example: "Paris"
 *                 correct:
 *                   type: boolean
 *                   example: true
 */
router.post("/", createAttempt);

/**
 * @swagger
 * /attempts/{id}:
 *   patch:
 *     summary: Corrige une tentative
 *     tags:
 *       - Attempts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tentative
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answer:
 *                 type: string
 *                 example: "dog"
 *               correct:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Tentative corrigée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 runId:
 *                   type: integer
 *                 questionId:
 *                   type: integer
 *                 answer:
 *                   type: string
 *                 correct:
 *                   type: boolean
 *             examples:
 *               exemple:
 *                 value:
 *                   id: 100
 *                   runId: 42
 *                   questionId: 10
 *                   answer: "dog"
 *                   correct: true
 */
router.patch("/:id", patchAttempt);

export default router;
