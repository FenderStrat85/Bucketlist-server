export interface IRegistrationUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginUserInput {
  email: string;
  password: string;
}

export interface ITravelBucketListInput {
  userId: string;
  category: string;
  title: string;
  about: string;
  cloudinaryPhotoUrl: string;
  completed: boolean;
  dateCompleted: string;
  latitude: string;
  longitude: string;
  country: string;
  city: string;
}

export interface IInputUserInfo {
  _id: string;
  accessToken: string;
}
