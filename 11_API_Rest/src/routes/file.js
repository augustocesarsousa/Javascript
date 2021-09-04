import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import file from '../controllers/File';

const router = new Router();

router.post('/', loginRequired, file.store);

export default router;
