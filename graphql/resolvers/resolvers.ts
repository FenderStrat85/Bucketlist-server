const {
  UserModel,
  TravelModel,
  EducationalModel,
  PersonalModel,
} = require('../../models/models');
const { AuthenticationError } = require('apollo-server');
const bcrypt = require('bcrypt');
import { create } from 'domain';
import { IRegistrationInput } from '../../interfaces/interfaces';
import { createToken } from './auth';

module.exports = {
  Mutation: {
    createUser: async (
      _: any,
      { registrationInput }: { registrationInput: IRegistrationInput },
    ) => {
      const { firstName, lastName, email, password } = registrationInput;
      const user = await UserModel.findOne({ email: email });
      if (user) {
        throw new AuthenticationError(
          'There was an error creating the account',
        );
      } else {
        const hash = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hash,
        });
        const _idString = user._id.toString();
        const token = await createToken(_idString);
        return { _id: user._id, accessToken: token };
      }
    },
  },
};
