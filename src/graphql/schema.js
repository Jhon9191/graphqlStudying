const { gql } = require("apollo-server");

const rootTypeDefs = gql`
     type Query {
        hi: String!
        hello: String!
        id: ID!
        name: String!
        age: Int!
        average: Float!
        married: Boolean!
        arrayString: [String]!
    }

`
const rootResolvers = {
    Query: {
        id: async () => {
            return 1
        },
        name: async () => {
            return "João Antônio"
        },
        age: async () => {
            return 30
        },
        average: async () => {
            return 30.5
        },
        married: async () => {
            return true
        },
        arrayString: async () => {
            return ["Ola","Bom dia","João"]
        }
        // hi: () => "Ola",
        // hello: async () => {
        //     return "Olá 2"
        // }   
    },
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];