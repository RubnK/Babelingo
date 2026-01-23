import { Router } from 'express';

import { createAttempt } from '../controllers/attemptsController';

const router = Router();

// POST /attempts : enregistre une tentative
router.post('/', createAttempt);

export default router;
