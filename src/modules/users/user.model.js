import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { passwordReg } from './user.validation';

const UserSchema = new Schema({
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

});

export default mongoose.model('User', UserSchema);
