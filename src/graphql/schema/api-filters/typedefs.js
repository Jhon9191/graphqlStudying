import { gql } from "apollo-server-core";

export const ApiFiltersInput = gql`
    input ApiFiltersInput {
    _sort: String
    _order: ApiFilterOrder
    _start: Int
    _limit: Int
  }

  enum ApiFilterOrder {
    ASC
    DESC
  }

`;