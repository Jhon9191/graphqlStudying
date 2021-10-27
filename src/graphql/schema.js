const { gql } = require("apollo-server");
import { userResolvers } from "./user/resolvers";
import { postResolvers } from "./post/resolvers";
import { userTypedefs } from "./user/typedefs";
import { postTypedefs } from "./post/typedefs";

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

export const typeDefs = [rootTypeDefs, userTypedefs, postTypedefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];