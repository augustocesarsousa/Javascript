import { Router } from 'express';
import student from '../controllers/Student';

const router = new Router();

router.get('/', student.index);

export default router;
