import { gql } from "@apollo/client";

export const NEW_TODO = gql`
  mutation createToDo($input: TodoInput!) {
    createToDo(input: $input) {
      id
      title
      content
    }
  }
`;

// mutation UpdateTeam($input: UpdateTeamInput!) {
//   updateTeam(input: $input) {
//     ...TeamFragment
//     offerRule {
//       config
//       display
//     }
//   }
// }
