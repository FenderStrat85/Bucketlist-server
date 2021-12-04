const mongoose = require("./db");

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
  travelBucketList: [
    {
      type: String,
    },
  ],
  educationalBucketList: [
    {
      type: String,
    },
  ],
  personalBucketList: [
    {
      type: String,
    },
  ],
});

const TravelSchema = new Schema({
  category: {
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
    required: true,
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

const EducationalSchema = new Schema({
  category: {
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
    required: true,
  },
});

const PersonalSchema = new Schema({
  category: {
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
    required: true,
  },
});
