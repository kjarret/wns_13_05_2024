import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query Query {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;
