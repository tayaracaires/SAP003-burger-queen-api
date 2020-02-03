import { Router } from 'express'
import OrderItemController from '../controllers/OrderItemsController';

const itemsRoutes = Router()
itemsRoutes.get('/', OrderItemController.getAllItems)
itemsRoutes.post('/', OrderItemController.addItem)
itemsRoutes.get('/:id', OrderItemController.getItem)
itemsRoutes.put('/:id', OrderItemController.updatedItem)
itemsRoutes.delete('/:id', OrderItemController.deleteItem)
export default itemsRoutes