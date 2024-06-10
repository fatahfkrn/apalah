import express from 'express';

const userSchema = new express.Schema({
  name: String,
  email: String,
  password: String
});

const User = express.model('User', userSchema);

export default User;