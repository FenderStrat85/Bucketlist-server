# Bucketlist-server

## About the Project

Backend server for [Bucketlist](https://github.com/FenderStrat85/Bucketlist-client-vue), an app designed to help you set and achieve your personal, educational and travel goals.

## Technologies

The technologies used to build this app:

### Backend

[MongoDB](https://www.mongodb.com/home), [Mongoose](https://mongoosejs.com/), [NodeJs](https://nodejs.org/en/), [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [GraphQL](https://graphql.org/), [JWT](https://jwt.io/)

## Getting Started

There's a few things you need to do to get started:

### Prerequsites

- npm

```
npm install npm@latest -g
```

- Database

You will need to create a MongoDB database. You can set the JWTSecret and port for the database in the environment variables as shown in the .env.example file. You will need to have MongoDB installed locally on your machine

1. Clone this repo

2. `npm install`

3. Create `.env` using `.env.example` as a template

### BackEnd

- This will create the fire up the server and create the database locally on your machine

```
npx nodemon
```
