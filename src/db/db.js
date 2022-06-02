import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)

export const upsertToDoItem = async (input) => {
  const db = new Low(adapter);

  await db.read()

  db.data ||= { todo: [] }

  console.log("reach");
  const { todo } = db.data
  todo.push(input);

  await db.write()
};
