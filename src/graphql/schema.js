const { gql } = require("apollo-server");
import { userResolvers } from "./user/resolvers";
import { userTypedefs } from "./user/typedefs";

const rootTypeDefs = gql`
     type Query {
        _empty: Boolean
    }

`
const rootResolvers = {
    Query: {
        _empty: () => true
    }
};

export const typeDefs = [rootTypeDefs, userTypedefs];
export const resolvers = [rootResolvers, userResolvers];