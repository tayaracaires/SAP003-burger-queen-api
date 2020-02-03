const database = require('../models');

class orderItemServices {
  static async getOrderItems() {
    try {
      return await database.items.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addItems(newItems) {
    try {
      return await database.items.create(newItems)
    } catch (error) {
      throw error
    }
  }


  static async updateItems(id, updateItems) {
    try {
      const itemsToUpdate = await database.items.findOne({
        where: { id: Number(id) }
      })

      if (itemsToUpdate) {
        await database.items.update(updateItems, { where: { id: Number(id) } })

        return updateItems
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getItems(id) {
    try {
      const theItems = await database.items.findOne({
        where: { id: Number(id) }
      })

      return theItems
    } catch (error) {
      throw error
    }
  }

  static async deleteItems(id) {
    try {
      const itemsToDelete = await database.items.findOne({ where: { id: Number(id) } })

      if (itemsToDelete) {
        const deletedItems = await database.items.destroy({
          where: { id: Number(id) }
        })
        return deletedItems
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

module.exports = orderItemServices