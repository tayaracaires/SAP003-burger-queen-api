const database = require('../models');

class productServices {
  static async getAllproducts() {
    try {
      return await database.products.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addProduct(newProduct) {
    try {
      return await database.products.create(newProduct)
    } catch (error) {
      throw error
    }
  }


  static async updateProduct(id, updateProduct) {
    try {
      const productToUpdate = await database.products.findOne({
        where: { id: Number(id) }
      })

      if (productToUpdate) {
        await database.products.update(updateProduct, { where: { id: Number(id) } })

        return updateProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProducts(id) {
    try {
      const theProducts = await database.products.findOne({
        where: { id: Number(id) }
      })

      return theProducts
    } catch (error) {
      throw error
    }
  }

  static async deleteProduct(id) {
    try {
      const productsToDelete = await database.products.findOne({ where: { id: Number(id) } })

      if (productsToDelete) {
        const deletedProducts = await database.products.destroy({
          where: { id: Number(id) }
        })
        return deletedProducts
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

module.exports = productServices