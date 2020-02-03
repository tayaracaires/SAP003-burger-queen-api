const database = require('../models');

class tablesService {
  static async getAllTables() {
    try {
      return await database.tables.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addTable(newTable) {
    try {
      return await database.tables.create(newTable)
    } catch (error) {
      throw error
    }
  }


  static async updateTable(id, updateTable) {
    try {
      const tableToUpdate = await database.tables.findOne({
        where: { id: Number(id) }
      })

      if (tableToUpdate) {
        await database.tables.update(updateTable, { where: { id: Number(id) } })

        return updateTable
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getTables(id) {
    try {
      const theTables = await database.tables.findOne({
        where: { id: Number(id) }
      })

      return theTables
    } catch (error) {
      throw error
    }
  }

  static async deleteTable(id) {
    try {
      const tablesToDelete = await database.tables.findOne({ where: { id: Number(id) } })

      if (tablesToDelete) {
        const deletedTables = await database.tables.destroy({
          where: { id: Number(id) }
        })
        return deletedTables
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

module.exports = tablesService