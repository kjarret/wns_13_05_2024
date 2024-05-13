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

export const GET_ALL_CONTINENTS = gql`
  query Query {
    continents {
      id
      name
    }
  }
`;
