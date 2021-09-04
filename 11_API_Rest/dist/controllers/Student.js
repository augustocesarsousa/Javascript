"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);

class Student {
  async index(req, res) {
    const student = await _Student2.default.findAll({
      attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
      include: {
        model: _Photo2.default,
        attributes: ['url', 'file_name'],
      },
    });

    return res.json(student);
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(401).json({
          errors: ['ID not sent!'],
        });
      }

      const student = await _Student2.default.findByPk(req.params.id, {
        attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'file_name'],
        },
      });

      if (!student) {
        return res.status(401).json({
          errors: ['Student does not exists!'],
        });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const student = await _Student2.default.create(req.body);

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

      const student = await _Student2.default.findByPk(req.params.id);

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

      const student = await _Student2.default.findByPk(req.params.id);

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

exports. default = new Student();
