const { gql } = require("apollo-server");

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
    cloudinaryPhotoUrl: string!
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
  getBucketListItems: [TravelBucketListItem | EducationalBucketListItem | PersonalBucketListItem]
  }

  type Mutation {
  createUser(registrationInput: RegistrationUserInput): UserInfo!
  loginUser(loginInput: LoginUserInput): UserInfo!
  addTravelBucketListItem(travelItemInput: TravelBucketListItem, userInfo: UserInfo): ConfirmationMessage!
  addEducationalBucketListItem(educationalItemInput: EducationalBucketListItem, userInfo: UserInfo): ConfirmationMessage!
  addPersonalBucketListItem(personalItemInput: PersonalBucketListItem, userInfo: UserInfo): ConfirmationMessage!
  updateBucketListItem(item: TravelBucketListItem|EducationalBucketListItem|PersonalBucketListItem): ConfirmationMessage!
  deleteBucketListItem(deleteItemId: DeleteItemInput): ConfirmationMessage!
  }

  type RegistrationUserInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  }

  type LoginUserInput {
  email: String
  password: String
  }

  type UserInfo {
  _id: String!
  accessToke: String!
  }

  type ConfirmationMessage {
  message: String
  }

  type DeleteItemInput {
  _id: String
  }
`;

export = typeDefs;
