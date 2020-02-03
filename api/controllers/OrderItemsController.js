const orderItemsService = require('../../services/orderItemsService');
import Utils from '../Utils/Utils';

const util = new Utils();

class OrderItemsController {
    static async getAllItems(res) {
      try {
        const allItems = await orderItemsService.getAllItems()
        if (allItems.length > 0) {
          util.setSuccess(200, 'Items retrieved', allItems)
        } else {
          util.setSuccess(200, 'No Item found')
        }
        return util.send(res)
      } catch (error) {
        util.setError(400, error)
        return util.send(res)
      }
    }
  
    static async addItem(req, res) {
      if (!req.body.id_product || !req.body.status_item || !req.body.id_orders ) {
        util.setError(400, 'Please provide complete details')
        return util.send(res)
      }
      const newItem = req.body
      try {
        const createdItem = await orderItemsService.addItem(newItem)
        util.setSuccess(201, 'Item Added!', createdItem)
        return util.send(res)
      } catch (error) {
        util.setError(400, error.message)
        return util.send(res)
      }}
  
    static async updatedItem(req, res) {
      const alteredItem = req.body
      const { id } = req.params
      if (!Number(id)) {
        util.setError(400, 'Please input a valid numeric value')
        return util.send(res)
      }
      try {
        const updateItem = await orderItemsService.updateItem(id, alteredItem)
        if (!updateItem) {
          util.setError(404, `Cannot find Item with the id: ${id}`)
        } else {
          util.setSuccess(200, 'Item updated', updateItem)
        }
        return util.send(res)
      } catch (error) {
        util.setError(404, error)
        return util.send(res)
      }
    }
  
    static async getItem(req, res) {
      const { id } = req.params
  
      if (!Number(id)) {
        util.setError(400, 'Please input a valid numeric value')
        return util.send(res)
      }
  
      try {
        const theItem = await orderItemsService.getItem(id)
  
        if (!theItem) {
          util.setError(404, `Cannot find Item with the id ${id}`)
        } else {
          util.setSuccess(200, 'Found Item', theItem)
        }
        return util.send(res)
      } catch (error) {
        util.setError(404, error)
        return util.send(res)
      }
    }
  
    static async deleteItem(req, res) {
      const { id } = req.params
  
      if (!Number(id)) {
        util.setError(400, 'Please provide a numeric value')
        return util.send(res)
      }
  
      try {
        const ItemToDelete = await orderItemsService.deleteItem(id)
  
        if (ItemToDelete) {
          util.setSuccess(200, 'Item deleted')
        } else {
          util.setError(404, `Item with the id ${id} cannot be found`)
        }
        return util.send(res)
      } catch (error) {
        util.setError(400, error)
        return util.send(res)
      }
    }
  }
  
  export default OrderItemsController