import { ApolloServer, gql } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4003).then(({url}) => {
  console.log(`Server is running ${url}!`);
}).catch(() => {
  console.log("running o carai!");
})


