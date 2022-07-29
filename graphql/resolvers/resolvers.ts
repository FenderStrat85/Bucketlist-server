const {
  UserModel,
  TravelModel,
  EducationalModel,
  PersonalModel,
} = require('../../models/models');
const { AuthenticationError } = require('apollo-server');
const bcrypt = require('bcrypt');

import {
  IRegistrationUserInput,
  ILoginUserInput,
  ITravelBucketListInput,
  IInputUserInfo,
  IEducationalBucketListInput,
  IPersonalBucketListInput,
  IDeleteItemId,
} from '../../interfaces/interfaces';
import { createToken } from './auth';

module.exports = {
  SavedItems: {
    __resolveType(obj: any) {
      if (obj.latitude) {
        return 'TravelBucketListItem';
      }
      if (obj.subject) {
        return 'EducationalBucketListItem';
      }
      if (obj.areaOfLife) {
        return 'PersonalBucketListItem';
      }
    },
  },

  Query: {
    getBucketListItems: async (_: any, args: any, context: any) => {
      console.log('Inside getBucketListItems');
      if (!context.user) {
        return { message: 'Unable to retrieve data' };
      } else {
        const {
          educationalBucketListItems,
          travelBucketListItems,
          personalBucketListItems,
        } = context.user;
        const itemsToReturn = [];
        console.log('educationalBucketListItems', educationalBucketListItems);
        for (let i = 0; i < educationalBucketListItems.length; i++) {
          const item = await EducationalModel.findOne({
            _id: educationalBucketListItems[i],
          });
          itemsToReturn.push(item);
        }
        for (let i = 0; i < travelBucketListItems.length; i++) {
          const item = await TravelModel.findOne({
            _id: travelBucketListItems[i],
          });
          itemsToReturn.push(item);
        }
        for (let i = 0; i < personalBucketListItems.length; i++) {
          const item = await PersonalModel.findOne({
            _id: personalBucketListItems[i],
          });
          itemsToReturn.push(item);
        }
        // console.log(itemsToReturn);
        return itemsToReturn;
      }
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { registrationInput }: { registrationInput: IRegistrationUserInput },
    ) => {
      console.log('registrationInput', registrationInput);
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
        return { _id: user._id, accessToken: token, firstName: user.firstName };
      }
    },
    loginUser: async (
      _: any,
      { loginInput }: { loginInput: ILoginUserInput },
    ) => {
      console.log('loginInput', loginInput);
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
        return { _id: user._id, accessToken: token, firstName: user.firstName };
      }
    },
    addTravelBucketListItem: async (
      _: any,
      { travelItemInput }: { travelItemInput: ITravelBucketListInput },
      context: any,
    ) => {
      if (!context.user) {
        return { message: 'Failed to add' };
      } else {
        const user = context.user;
        const {
          category,
          title,
          about,
          cloudinaryPhotoUrl,
          completed,
          dateCompleted,
          latitude,
          longitude,
          country,
          city,
        } = travelItemInput;
        const newTravelItem = await TravelModel.create({
          category: category,
          userId: user._id,
          title: title,
          about: about,
          cloudinaryPhotoUrl: cloudinaryPhotoUrl,
          completed: completed,
          dateCompleted: dateCompleted,
          latitude: latitude,
          longitude: longitude,
          country: country,
          city: city,
        });
        user.travelBucketListItems.push(newTravelItem._id);
        user.save();
        return { message: 'Added successfully' };
      }
    },
    addEducationalBucketListItem: async (
      _: any,
      {
        educationalItemInput,
      }: { educationalItemInput: IEducationalBucketListInput },
      context: any,
    ) => {
      if (!context.user) {
        return { message: 'Failed to add' };
      } else {
        const user = context.user;
        const {
          category,
          title,
          about,
          subject,
          desiredGoal,
          reasonForLearning,
          desiredCompletionDate,
          completed,
          completedOnTime,
        } = educationalItemInput;
        const newEducationalItem = await EducationalModel.create({
          userId: user._id,
          category: category,
          title: title,
          about: about,
          subject: subject,
          desiredGoal: desiredGoal,
          reasonForLearning: reasonForLearning,
          desiredCompletionDate: desiredCompletionDate,
          completed: completed,
          completedOnTime: completedOnTime,
        });
        user.educationalBucketListItems.push(newEducationalItem._id);
        user.save();
        return {
          _id: newEducationalItem._id,
          userId: user._id,
          category: category,
          title: title,
          about: about,
          subject: subject,
          desiredGoal: desiredGoal,
          reasonForLearning: reasonForLearning,
          desiredCompletionDate: desiredCompletionDate,
          completed: completed,
          completedOnTime: completedOnTime,
        };
      }
    },
    addPersonalBucketListItem: async (
      _: any,
      { personalItemInput }: { personalItemInput: IPersonalBucketListInput },
      context: any,
    ) => {
      console.log('personalItemInput', personalItemInput);
      if (!context.user) {
        return { message: 'Failed to add' };
      } else {
        const user = context.user;
        const {
          category,
          title,
          about,
          areaOfLife,
          desiredGoal,
          reasonForGoal,
          desiredCompletionDate,
          completed,
          completedOnTime,
        } = personalItemInput;
        const newPersonalItem = await PersonalModel.create({
          userId: user._id,
          category: category,
          title: title,
          about: about,
          areaOfLife: areaOfLife,
          desiredGoal: desiredGoal,
          reasonForGoal: reasonForGoal,
          desiredCompletionDate: desiredCompletionDate,
          completed: completed,
          completedOnTime: completedOnTime,
        });
        user.personalBucketListItems.push(newPersonalItem._id);
        user.save();
        return {
          _id: newPersonalItem._id,
          userId: user._id,
          category: category,
          title: title,
          about: about,
          areaOfLife: areaOfLife,
          desiredGoal: desiredGoal,
          reasonForGoal: reasonForGoal,
          desiredCompletionDate: desiredCompletionDate,
          completed: completed,
          completedOnTime: completedOnTime,
        };
      }
    },
    deleteBucketListItem: async (
      _: any,
      { deleteItemInput }: { deleteItemInput: IDeleteItemId },
      context: any,
    ) => {
      const { _id, category } = deleteItemInput;
      if (!context.user) {
        return { message: 'Failed to delete' };
      } else {
        const user = context.user;
        if (category === 'Travel') {
          const index = user.travelBucketListItems.findIndexOf(_id);
          if (index > -1) {
            await user.travelBucketListItems.splice(index, 1);
            user.save();
          }
          await TravelModel.findOneAndDelete({ _id: _id });
          return { message: 'Deleted successfully' };
        }
        if (category === 'Education') {
          const index = user.educationalBucketListItems.indexOf(_id);
          if (index > -1) {
            await user.educationalBucketListItems.splice(index, 1);
            user.save();
          }
          await EducationalModel.findOneAndDelete(_id);
          return { message: 'Deleted successfully' };
        }

        if (category === 'Personal') {
          const index = user.personalBucketListItems.findIndexOf(_id);
          if (index > -1) {
            await user.personalBucketListItems.splice(index, 1);
            user.save();
          }
          await PersonalModel.findOneAndDelete(_id);
          return { message: 'Deleted successfully' };
        }
      }
    },
  },
};
