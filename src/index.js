import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query{
      id: ID!,
      name: String!,
      age: Int!,
      average: Float!,
      married: Boolean!,
      arrayString: [String!]!
    }
  `,

    resolvers: {
      Query: {
        id: () => 1,
        name: () => "João",
        age: () => 30,
        average: () => 1.75,
        married: () => true,
        arrayString: () => ["ds","sdf"]
      },
    },

});

server.listen(4003).then(({url}) => {
  console.log(`Server is running ${url}!`);
}).catch(() => {
  console.log("running o carai!");
})


