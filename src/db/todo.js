const nanoid = require('nanoid')

const createItemModel = db => {
  return {
    findMany(filter) {
      return db.get('item')
        .filter(filter)
        .value()
    },

    findOne(filter) {
      return db.get('item')
        .find(filter)
        .value()
    },

    create(item) {
      const newItem = {id: nanoid(), createdAt: Date.now(), ...item}

      db.get('item')
        .push(newItem)
        .write()

      return newItem
    }
  }
}

module.exports = createItemModel
