import Student from '../models/Student';

class Home {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Daniela',
      surname: 'Rosa',
      email: 'daniela@email.com',
      age: 30,
      weight: 90,
      height: 1.60,
    });

    res.json(newStudent);
  }
}

export default new Home();
