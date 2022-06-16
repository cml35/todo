const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type Todo {
    id: String
    title: String
    content: String
  }

  input TodoInput {
    id: String!
    title: String!
    content: String!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createToDo(input: TodoInput!): Todo!
  }
`;
module.exports = typeDefs
