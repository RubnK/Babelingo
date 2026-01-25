import { Router } from 'express';
import { getUserXP, patchUserXP } from '../controllers/userController';

const router = Router();

// GET /users/:id/xp
router.get('/:id/xp', getUserXP);

// PATCH /users/:id/xp
router.patch('/:id/xp', patchUserXP);

export default router;
