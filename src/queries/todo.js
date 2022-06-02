import { gql } from "@apollo/client";

export const getTodoItemsQuery = gql`
  query GetToDoItems {
    todos {
      id
      title
      content
    }
  }
`;
