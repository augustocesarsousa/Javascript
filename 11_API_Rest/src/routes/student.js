import { Router } from 'express';
import student from '../controllers/Student';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', student.index);
router.get('/:id', student.show);
router.post('/', loginRequired, student.create);
router.put('/:id', loginRequired, student.update);
router.delete('/:id', loginRequired, student.delete);

export default router;
