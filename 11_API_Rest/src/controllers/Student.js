import StudentModel from '../models/Student';

class Student {
  async index(req, res) {
    const students = await StudentModel.findAll();
    res.json(students);
  }
}

export default new Student();
