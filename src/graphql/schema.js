const { gql } = require("apollo-server");

const rootTypeDefs = gql`
     type Query {
      hi: String,
    }

`
const rootResolvers = {
    Query: {
        hi: () => "Ola"
    },
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];