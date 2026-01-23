import { Router } from 'express';

import { createRun, getRunById, getRunsByUser } from '../controllers/runsController';

const router = Router();

// POST /runs : démarre une session de jeu
router.post('/', createRun);

// GET /runs/:id : détail d'une session de jeu
router.get('/:id', getRunById);

// GET /runs/user/:id : liste toutes les sessions d'un utilisateur
router.get('/user/:id', getRunsByUser);

export default router;
