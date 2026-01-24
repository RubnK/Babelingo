import { Router } from 'express';

import { createAttempt } from '../controllers/attemptsController';

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
router.post('/', createAttempt);

export default router;
