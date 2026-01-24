import { Router } from 'express';

import { createRun, getRunById, getRunsByUser } from '../controllers/runsController';

const router = Router();


/**
 * @swagger
 * /runs:
 *   post:
 *     summary: Démarre une session de jeu
 *     tags:
 *       - Runs
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               levelId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Session de jeu créée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 42
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 levelId:
 *                   type: integer
 *                   example: 2
 *                 startedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-23T12:34:56.789Z"
 */
router.post('/', createRun);


/**
 * @swagger
 * /runs/{id}:
 *   get:
 *     summary: Détail d'une session de jeu
 *     tags:
 *       - Runs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la session
 *     responses:
 *       200:
 *         description: Détail de la session
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 42
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 levelId:
 *                   type: integer
 *                   example: 2
 *                 startedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-23T12:34:56.789Z"
 */
router.get('/:id', getRunById);


/**
 * @swagger
 * /runs/user/{id}:
 *   get:
 *     summary: Liste toutes les sessions d'un utilisateur
 *     tags:
 *       - Runs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Liste des sessions de l'utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 42
 *                   userId:
 *                     type: integer
 *                     example: 1
 *                   levelId:
 *                     type: integer
 *                     example: 2
 *                   startedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2026-01-23T12:34:56.789Z"
 */
router.get('/user/:id', getRunsByUser);

export default router;
