import multer from 'multer';
import multerConfig from '../config/multer';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class File {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const original_name = originalname;
      const file_name = filename;
      const { student_id } = req.body;
      const photo = await Photo.create({ original_name, file_name, student_id });

      return res.json(photo);
    });
  }
}

export default new File();
