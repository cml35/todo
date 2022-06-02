import { gql } from "@apollo/client";

export const NEW_TODO = gql`
  mutation createToDo($input: ToDoInput) {
    createToDo(input: $input) {
      id
      title
      content
    }
  }
`;
