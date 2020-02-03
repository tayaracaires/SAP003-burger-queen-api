import { Router } from 'express'
import ItemController from '../controllers/itemsController';

const itemsRoutes = Router()
itemsRoutes.get('/', ItemController.getAllItems)
itemsRoutes.post('/', ItemController.addItem)
itemsRoutes.get('/:id', ItemController.getItem)
itemsRoutes.put('/:id', ItemController.updatedItem)
itemsRoutes.delete('/:id', ItemController.deleteItem)
export default itemsRoutes