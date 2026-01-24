import { Router } from "express";

import {
  createRun,
  getRunById,
  getRunsByUser,
  closeRun,
} from "../controllers/runsController";

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
router.post("/", createRun);

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
router.get("/:id", getRunById);

/**
 * @swagger
 * /runs/{id}/close:
 *   patch:
 *     summary: Termine une session de jeu et indique si elle est réussie
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
 *         description: Session clôturée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 userId:
 *                   type: integer
 *                 levelId:
 *                   type: integer
 *                 startedAt:
 *                   type: string
 *                   format: date-time
 *                 completedAt:
 *                   type: string
 *                   format: date-time
 *                 succeeded:
 *                   type: boolean
 *                 correctCount:
 *                   type: integer
 *             examples:
 *               exemple:
 *                 value:
 *                   id: 1
 *                   userId: 1
 *                   levelId: 2
 *                   startedAt: "2026-01-24T10:00:00.000Z"
 *                   completedAt: "2026-01-24T10:10:00.000Z"
 *                   succeeded: true
 *                   correctCount: 8
 */
router.patch('/:id/close', closeRun);

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
router.get("/user/:id", getRunsByUser);

export default router;
