import { Router } from 'express';
import multer from 'multer';

import file from '../controllers/File';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('photo'), file.store);

export default router;
