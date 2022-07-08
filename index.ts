const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs/typeDefs');
const resolvers = require('./graphql/resolvers/resolvers');
require('dotenv').config();
const PORT = process.env.PORT;
import { createToken, getUserFromToken } from './graphql/resolvers/auth';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({ req }: { req: any }) {
    // console.log('req.body!!!!', req.body);
    const token = req.headers.authorization;
    console.log('token', token);
    const user = await getUserFromToken(token);
    console.log('user!!!!!!!!!', user);
    return { user, createToken };
  },
});

server.listen(PORT).then(() => {
  console.log(`🚀 Server ready on port ${PORT}`);
});
