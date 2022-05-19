import { gql } from "@apollo/client";

// to access the query (which is used in GraphQL GUI to fetch all contacts) from other file
export const LOAD_CONTACTS = gql`
  query {
    getAllContacts {
      name
      phone
    }
  }
`;