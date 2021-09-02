import StudentModel from '../models/Student';

class Student {
  async index(req, res) {
    const student = await StudentModel.findAll();
    // const { id, name, email } = student;

    // return res.json({ id, name, email });
    return res.json(student);
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(401).json({
          errors: ['ID not sent!'],
        });
      }

      const student = await StudentModel.findByPk(req.params.id);

      if (!student) {
        return res.status(401).json({
          errors: ['Student does not exists!'],
        });
      }

      const { id, name, email } = student;

      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const student = await StudentModel.create(req.body);

      const { id, name, email } = student;

      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(401).json({
          errors: ['ID not sent!'],
        });
      }

      const student = await StudentModel.findByPk(req.params.id);

      if (!student) {
        return res.status(401).json({
          errors: ['Student does not exists!'],
        });
      }

      const newData = await student.update(req.body);

      const { id, name, email } = newData;

      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(401).json({
          errors: ['ID not sent!'],
        });
      }

      const student = await StudentModel.findByPk(req.params.id);

      if (!student) {
        return res.status(401).json({
          errors: ['Student does not exists!'],
        });
      }

      await student.destroy();

      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new Student();
