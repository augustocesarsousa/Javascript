import jwt from 'jsonwebtoken';
import User from '../models/User';

class Token {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Email or password not send!'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exists!'],
      });
    }

    if (!(await user.passwordValidate(password))) {
      return res.status(401).json({
        errors: ['Invalid password!'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new Token();
