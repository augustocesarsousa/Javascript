"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class Token {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Email or password not send!'],
      });
    }

    const user = await _User2.default.findOne({ where: { email } });

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
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

exports. default = new Token();
