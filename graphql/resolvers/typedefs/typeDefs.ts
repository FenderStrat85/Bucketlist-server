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
    user_id: String
    category: String!
    title: String!
    about: String!
    cloudinaryPhotoUrl: string!
    completed: Boolean!
    dateCompleted: String
    latitude: String!
    longitude: String!
    country: String!
    city: String
  }

  type EducationalBucketListItem {
    _id: String
    user_id: String
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
    user_id: String
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
`;
