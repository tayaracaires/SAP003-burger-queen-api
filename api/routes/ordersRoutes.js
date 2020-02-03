import { Router } from 'express'
import OrderController from '../controllers/OrdersController';

const ordersRoutes = Router()
ordersRoutes.get('/', OrderController.getAllOrders)
ordersRoutes.post('/', OrderController.addOrder)
ordersRoutes.get('/:id', OrderController.getOrder)
ordersRoutes.put('/:id', OrderController.updatedOrder)
ordersRoutes.delete('/:id', OrderController.deleteOrder)
export default ordersRoutes