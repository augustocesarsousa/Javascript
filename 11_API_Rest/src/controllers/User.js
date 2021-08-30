import UserModel from '../models/User';

class User {
  async create(req, res) {
    try {
      const newUser = await UserModel.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try{
      const users = await User.findAll();
      return res.json(users);
    } catch(e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try{
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch(e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try{
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID not send!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!req.params.id){
        return res.status(400).json({
          errors: ['User does not exists!'],
        });
      }

      const newDatas = await user.update(req.bory);

      return res.json(newDatas);
    } catch(e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try{
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID not send!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!req.params.id){
        return res.status(400).json({
          errors: ['User does not exists!'],
        });
      }

      await user.destroy();

      return res.json(null);
    } catch(e) {
      return res.json(null);
    }
  }
}

export default new User();
