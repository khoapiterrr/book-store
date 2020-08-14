const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
usersSchema.pre('save', async function (next) {
  try {
    const checkEmail = await mongoose.models['users'].findOne({
      email: this.email,
    });
    if (checkEmail) {
      next('Tài khoản email đã tồn tại trong hệ thống');
    }
    if (!this.isModified('password')) return next();

    const rounds = parseInt(process.env.PWD_ROUNDS);

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;

    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
usersSchema.pre('update', async function (next) {
  try {
    if (!this.isModified('password')) return next();

    const rounds = parseInt(process.env.PWD_ROUNDS);

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;

    return next();
  } catch (error) {
    return next(error);
  }
});

usersSchema.static = {
  async getById(id) {
    try {
      let user;

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec();
      }
      if (user) {
        return user;
      }

      throw new Error('User does not exist');
    } catch (error) {
      throw error;
    }
  },
};
module.exports = Users = mongoose.model('users', usersSchema);
