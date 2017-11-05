import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';
import { passwordReg } from './user.validation';
import constants from '../../config/constants';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is Required'],
      trim: true,
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: '{VALUE} is not a valid email',
      },
    },
    userName: {
      type: String,
      required: [true, 'Username  is Required'],
      trim: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, 'First Name  is Required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last Name  is Required'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password  is Required'],
      trim: true,
      minlength: [6, 'Password need to be longer'],
      validate: {
        validator(password) {
          return passwordReg.test(password);
        },
        message: '{VALUE} is not a valid password',
      },
    },
  },
  { timestamps: true },
);

UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },

  authenticateUser(password) {
    return compareSync(password, this.password);
  },

  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      constants.JWT_SECRET,
    );
  },

  toAuthJSON() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `Bearer ${this.createToken()}`,
    };
  },

  toJSON() {
    return {
      _id: this._id,
      userName: this.userName,
    };
  },
};

export default mongoose.model('User', UserSchema);
