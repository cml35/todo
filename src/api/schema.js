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

  type Query {
    todos: [Todo]
  }

  input ToDoInput {
    id: String
    title: String
    content: String
  }

  type Mutation {
    createToDo(input: ToDoInput): Todo
  }
`;
module.exports = typeDefs
