const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;
const { UserModel } = require('../../models/models');

const createToken = async (id: string) => {
  return jwt.sign(id, secret);
};

const getUserFromToken = async (token: string) => {
  try {
    //headers cannot be passed as a string
    const userId = jwt.verify(token, secret);
    const user = await UserModel.findOne({ _id: userId });
    return user;
  } catch (error) {
    console.error('An error has occurred', error);
    return null;
  }
};

export { createToken, getUserFromToken };
