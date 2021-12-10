const {
  UserModel,
  TravelModel,
  EducationalModel,
  PersonalModel,
} = require('../../models/models');
const { AuthenticationError } = require('apollo-server');
const bcrypt = require('bcrypt');
import { create } from 'domain';
import {
  IRegistrationUserInput,
  ILoginUserInput,
  ITravelBucketListInput,
  IInputUserInfo,
} from '../../interfaces/interfaces';
import { createToken } from './auth';

module.exports = {
  Mutation: {
    createUser: async (
      _: any,
      { registrationInput }: { registrationInput: IRegistrationUserInput },
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
    loginUser: async (
      _: any,
      { loginInput }: { loginInput: ILoginUserInput },
    ) => {
      console.log(loginInput);
      const { email, password } = loginInput;
      const user = await UserModel.findOne({ email: email });
      if (!user) {
        throw new AuthenticationError('There was an error logging in');
      }
      const validatedPassword = bcrypt.compare(password, user.password);
      if (!validatedPassword) {
        throw new AuthenticationError('There was an error logging in');
      } else {
        const _idString = user._id.toString();
        const token = createToken(_idString);
        return { _id: user._id, accessToken: token };
      }
    },
    addTravelBucketListItem: async (
      _: any,
      { travelItemInput }: { travelItemInput: ITravelBucketListInput },
      context: any,
    ) => {
      console.log(context.user);
      if (!context.user) {
        return { message: 'Failed to add' };
      } else {
        return { message: 'Added successfully' };
      }
    },
  },
};
