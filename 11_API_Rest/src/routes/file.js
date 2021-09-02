import { Router } from 'express';

import file from '../controllers/File';

const router = new Router();

router.post('/', file.store);

export default router;
