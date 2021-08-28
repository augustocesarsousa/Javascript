import UserModel from '../models/User';

class User {
  async create(req, res) {
    try {
      const newUser = await UserModel.create(req.body);
      res.json(newUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new User();
