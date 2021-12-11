import exp from 'constants';

const mongoose = require('./db');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  travelBucketListItems: [
    {
      type: String,
    },
  ],
  educationalBucketListItems: [
    {
      type: String,
    },
  ],
  personalBucketListItems: [
    {
      type: String,
    },
  ],
});

const travelSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  cloudinaryPhotoUrl: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  dateCompleted: {
    type: String,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const educationalSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  desiredGoal: {
    type: String,
    required: true,
  },
  reasonForLearning: {
    type: String,
    required: true,
  },
  desiredCompletionDate: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  completedOnTime: {
    type: Boolean,
  },
});

const personalSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  areaOfLife: {
    type: String,
    required: true,
  },
  desiredGoal: {
    type: String,
    required: true,
  },
  reasonForGoal: {
    type: String,
    required: true,
  },
  desiredCompletionDate: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  completedOnTime: {
    type: Boolean,
  },
});

const UserModel = mongoose.model('User', userSchema);
const TravelModel = mongoose.model('TravelItem', travelSchema);
const EducationalModel = mongoose.model('EducationalItem', educationalSchema);
const PersonalModel = mongoose.model('PersonalItem', personalSchema);

export = { UserModel, TravelModel, EducationalModel, PersonalModel };
