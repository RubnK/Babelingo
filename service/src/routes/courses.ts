import { Router } from "express";
import { getAllCourses } from "../controllers/coursesController";

const router = Router();

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Liste tous les cours
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: Liste des cours
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   language:
 *                     type: string
 *                   level:
 *                     type: string
 *                   duration:
 *                     type: string
 *                   lessons:
 *                     type: integer
 *                   students:
 *                     type: integer
 *                   rating:
 *                     type: number
 *                   image:
 *                     type: string
 */
router.get("/", getAllCourses);

export default router;
