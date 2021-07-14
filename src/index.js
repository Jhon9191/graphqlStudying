import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!,
      users: [User!]!
    }

    type User {
      id: ID!,
      userName: String!
    }

  `,

    resolvers: {
      Query: {
        user: () => {
          return {
            id: 12121,
            userName: "João"
          };
        },
        users: () => {
          return [
            {
              id: 12121,
              userName: "João"
            },
            {
              id: 13451,
              userName: "João 2"
            },
          ];
        },
      },
    },

});

server.listen(4003).then(({url}) => {
  console.log(`Server is running ${url}!`);
}).catch(() => {
  console.log("running o carai!");
})


