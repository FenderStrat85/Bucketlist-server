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
    cloudinaryPhotoUrl: String
    completed: Boolean!
    dateCompleted: String
    latitude: Float!
    longitude: Float!
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
    getBucketListItems: [SavedItems]
  }

  type Mutation {
    createUser(registrationInput: RegistrationUserInput): UserInfo!
    loginUser(loginInput: LoginUserInput): UserInfo!
    addTravelBucketListItem(
      travelItemInput: TravelBucketListInput
    ): TravelBucketListItem!
    addEducationalBucketListItem(
      educationalItemInput: EducationalBucketListInput
    ): EducationalBucketListItem!
    addPersonalBucketListItem(
      personalItemInput: PersonalBucketListInput
    ): PersonalBucketListItem!
    updateEducationalBucketListItem(
      educationalItemInput: EducationalBucketListInput
    ): EducationalBucketListItem!
    updatePersonalBucketListItem(
      personalItemInput: PersonalBucketListInput
    ): PersonalBucketListItem!
    deleteBucketListItem(deleteItemInput: DeleteItemInput): ConfirmationMessage!
  }

  union SavedItems =
      TravelBucketListItem
    | EducationalBucketListItem
    | PersonalBucketListItem

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
    firstName: String!
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
    cloudinaryPhotoUrl: String
    completed: Boolean!
    dateCompleted: String
    latitude: Float!
    longitude: Float!
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
    category: String
  }
`;

export = typeDefs;
