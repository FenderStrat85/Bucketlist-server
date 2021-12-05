const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;
const { UserModel } = require("../../models/models");

const createToken = async (id: string) => {
  return jwt.sign(id, secret);
};

const getUserFromToken = async (token: string) => {
  try {
    const userId = jwt.verify(token, secret);
    return await UserModel.findOne({ _id: userId });
  } catch (error) {
    return null;
  }
};

export { createToken, getUserFromToken };
