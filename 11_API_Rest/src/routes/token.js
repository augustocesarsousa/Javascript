import { Router } from 'express';
import token from '../controllers/Token';

const router = new Router();

router.post('/', token.create);

export default router;
