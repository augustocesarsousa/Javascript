import { Router } from 'express';
import home from '../controllers/Home';

const router = new Router();

router.get('/', home.index);

export default router;
