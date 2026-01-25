import { Router } from 'express';
import { getUserXP, patchUserXP } from '../controllers/userController';

const router = Router();

/**
 * @swagger
 * /users/{id}/xp:
 *   get:
 *     summary: Récupère l’XP d’un utilisateur
 *     tags:
 *       - Utilisateurs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l’utilisateur
 *     responses:
 *       200:
 *         description: XP de l’utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 xp:
 *                   type: integer
 *       400:
 *         description: ID invalide
 *       404:
 *         description: Utilisateur non trouvé
 *   patch:
 *     summary: Incrémente l’XP d’un utilisateur
 *     tags:
 *       - Utilisateurs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l’utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               xp:
 *                 type: integer
 *                 description: XP à ajouter
 *     responses:
 *       200:
 *         description: XP mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 xp:
 *                   type: integer
 *       400:
 *         description: ID ou XP invalide
 *       404:
 *         description: Utilisateur non trouvé
 */

// GET /users/:id/xp
router.get('/:id/xp', getUserXP);

// PATCH /users/:id/xp
router.patch('/:id/xp', patchUserXP);

export default router;
