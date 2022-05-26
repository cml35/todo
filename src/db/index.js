const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('src/db/db.json')
const db = low(adapter)

const createItemModel = require('./todo')
const createUserModel = require('./user')

module.exports = {
  models: {
    Pet: createItemModel(db),
    User: createUserModel(db),
  },
  db
}
