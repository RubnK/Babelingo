import { Router } from "express";
import { getAllLanguages } from "../controllers/languagesController";

const router = Router();

/**
 * @swagger
 * /languages:
 *   get:
 *     summary: Liste toutes les langues
 *     tags:
 *       - Languages
 *     responses:
 *       200:
 *         description: Liste des langues
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
 *                   flag:
 *                     type: string
 *                   nativeName:
 *                     type: string
 *                   speakers:
 *                     type: string
 *                   difficulty:
 *                     type: string
 *                   category:
 *                     type: string
 *                   popularity:
 *                     type: integer
 *                   courses:
 *                     type: integer
 *                   description:
 *                     type: string
 */
router.get("/", getAllLanguages);

export default router;
