import { gql } from 'apollo-server';

export const postTypedefs = gql`
    extend type Query{
        post(id: ID!): Post!,
        posts: [Post!]!
    }

    type Post{
        id: ID!
        title: String!
        body: String!
        #userId: User!
        indexRef: Int!
        createdAt: String!
        unixTimesTemp: String!
    }
`