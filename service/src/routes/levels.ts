import { Router } from 'express';

import { getAllLevels, getQuestionsByLevel } from '../controllers/levelsController';

const router = Router();

// GET /levels : liste tous les niveaux
router.get('/', getAllLevels);

// GET /levels/:id/questions : liste les questions d’un niveau
router.get('/:id/questions', getQuestionsByLevel);

export default router;
