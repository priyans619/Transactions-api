import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,
      required: true
    },

    phoneNumber:
    {
      type: String,
      required: true
    },

  });

export const User = mongoose.model('User', UserSchema);

