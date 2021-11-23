import { gql } from 'apollo-server';

export const postTypedefs = gql`
    extend type Query{
        post(id: ID!): PostResult!,
        posts(input: ApiFiltersInput): [Post!]!
    }
""" 
AS INTERFACES OBRIGAM QUE RESPECTIVAMENTE OS TIPOS QUE FOREM CRIADOS TENHAM INCLUSOS 
OS CAMPOS QUE A INTERFACE TEM 
"""
union PostResult = PostNotFoundError | PostTimeoutError | Post
  
  interface PostError {
        statusCode: Int!
        message: String!
  }
  
  type PostNotFoundError implements PostError {
        statusCode: Int!
        message: String!
        postId: String!
  }
  type PostTimeoutError implements PostError {
        statusCode: Int!
        message: String!
        timeout: Int!
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