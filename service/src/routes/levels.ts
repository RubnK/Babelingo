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
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Débutant"
 *             examples:
 *               exemple:
 *                 summary: Niveaux Babelingo
 *                 value:
 *                   - id: 1
 *                     number: 1
 *                     category: "animaux"
 *                   - id: 2
 *                     number: 2
 *                     category: "nourriture"
 *                   - id: 3
 *                     number: 3
 *                     category: "maison"
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
 *                     example: 10
 *                   question:
 *                     type: string
 *                     example: "Quelle est la capitale de la France ?"
 *             examples:
 *               exemple:
 *                 summary: Questions du niveau "animaux"
 *                 value:
 *                   - id: 1
 *                     type: "qcm"
 *                     language: "fr"
 *                     content:
 *                       targetLang: "en"
 *                       question: "Comment dit-on 'chien' en anglais ?"
 *                       options: ["dog", "cat", "mouse", "bird"]
 *                       answer: "dog"
 *                   - id: 2
 *                     type: "qcm"
 *                     language: "fr"
 *                     content:
 *                       targetLang: "es"
 *                       question: "Comment dit-on 'chat' en espagnol ?"
 *                       options: ["gato", "perro", "ratón", "pájaro"]
 *                       answer: "gato"
 *                   - id: 3
 *                     type: "matching"
 *                     language: "fr"
 *                     content:
 *                       targetLangs: ["en", "es", "de"]
 *                       baseWords: ["chat", "chien", "oiseau"]
 *                       targetWords:
 *                         - lang: "en"
 *                           word: "cat"
 *                         - lang: "es"
 *                           word: "perro"
 *                         - lang: "de"
 *                           word: "Vogel"
 */
router.get("/:id/questions", getQuestionsByLevel);

export default router;
