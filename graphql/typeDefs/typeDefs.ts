const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: String
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    bucketListItems: [String]
  }

  type TravelBucketListItem {
    _id: String
    userId: String
    category: String!
    title: String!
    about: String!
    cloudinaryPhotoUrl: String!
    completed: Boolean!
    dateCompleted: String
    latitude: String!
    longitude: String!
    country: String!
    city: String!
  }

  type EducationalBucketListItem {
    _id: String
    userId: String
    category: String!
    title: String!
    about: String!
    subject: String!
    desiredGoal: String!
    reasonForLearning: String!
    desiredCompletionDate: String!
    completed: Boolean!
    completedOnTime: Boolean
  }

  type PersonalBucketListItem {
    _id: String
    userId: String
    category: String!
    title: String!
    about: String!
    areaOfLife: String!
    desiredGoal: String!
    reasonForGoal: String!
    desiredCompletionDate: String!
    completed: Boolean!
    completedOnTime: Boolean
  }

  type Query {
    getBucketListItems: [Items]
  }

  type Mutation {
    createUser(registrationInput: RegistrationUserInput): UserInfo!
    loginUser(loginInput: LoginUserInput): UserInfo!
    addTravelBucketListItem(
      travelItemInput: TravelBucketListInput
      userInfo: InputUserInfo
    ): ConfirmationMessage!
    addEducationalBucketListItem(
      educationalItemInput: EducationalBucketListInput
      userInfo: InputUserInfo
    ): ConfirmationMessage!
    addPersonalBucketListItem(
      personalItemInput: PersonalBucketListInput
      userInfo: InputUserInfo
    ): ConfirmationMessage!
    updateBucketListItem(item: Items): ConfirmationMessage!
    deleteBucketListItem(deleteItemId: DeleteItemInput): ConfirmationMessage!
  }

  enum Items {
    TravelBucketListItem
    EducationalBucketListItem
    PersonalBucketListItem
  }

  input RegistrationUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input LoginUserInput {
    email: String
    password: String
  }

  type UserInfo {
    _id: String!
    accessToken: String!
  }

  type ConfirmationMessage {
    message: String
  }

  input InputUserInfo {
    _id: String!
    accessToken: String!
  }

  input TravelBucketListInput {
    _id: String
    userId: String
    category: String!
    title: String!
    about: String!
    cloudinaryPhotoUrl: String!
    completed: Boolean!
    dateCompleted: String
    latitude: String!
    longitude: String!
    country: String!
    city: String!
  }

  input EducationalBucketListInput {
    _id: String
    userId: String
    category: String!
    title: String!
    about: String!
    subject: String!
    desiredGoal: String!
    reasonForLearning: String!
    desiredCompletionDate: String!
    completed: Boolean!
    completedOnTime: Boolean
  }

  input PersonalBucketListInput {
    _id: String
    userId: String
    category: String!
    title: String!
    about: String!
    areaOfLife: String!
    desiredGoal: String!
    reasonForGoal: String!
    desiredCompletionDate: String!
    completed: Boolean!
    completedOnTime: Boolean
  }

  input DeleteItemInput {
    _id: String
  }
`;

export = typeDefs;
