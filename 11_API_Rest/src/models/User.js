import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 28],
            msg: 'Name must be between 4 and 28 characters!',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already exists!',
        },
        validate: {
          isEmail: {
            msg: 'Invalid email!',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 28],
            msg: 'Password must be between 4 and 28 characters!',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}
