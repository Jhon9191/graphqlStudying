const { gql } = require('apollo-server');
import { userResolvers } from './user/resolvers';
import { postResolvers } from './post/resolvers';
import { userTypedefs } from './user/typedefs';
import { postTypedefs } from './post/typedefs';
import { ApiFiltersInput } from './api-filters/typedefs';
import { ApiFiltersResolvers } from './api-filters/resolvers';
import { loginTypedefs } from './login/typedefs';
import { loginResolvers } from './login/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
  type Mutation {
    _empty: Boolean
  }
`;
const rootResolvers = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypedefs,
  postTypedefs,
  ApiFiltersInput,
  loginTypedefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  ApiFiltersResolvers,
  loginResolvers,
];
