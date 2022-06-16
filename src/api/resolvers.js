import { upsertToDoItem } from "../db/db";

/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const todos = [
  {
    id: "1",
    title: "First entry",
    content: "Today was a good day"
  },
  {
    id: "2", 
    title: "Second entry",
    content: "Today was a great day"
  }
];

module.exports = {
  Query: {
    todos: () => todos
  },
  Mutation: {
    createToDo(input) {
      return upsertToDoItem(input);
    }
  }
}
