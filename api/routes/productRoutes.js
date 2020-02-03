
import { Router } from 'express'
import ProductsController from '../controllers/ProductController'

const productRoutes = Router()
productRoutes.get('/', ProductsController.getAllProducts)
productRoutes.post('/', ProductsController.addProduct)
productRoutes.get('/:id', ProductsController.getProduct)
productRoutes.put('/:id', ProductsController.updatedProduct)
productRoutes.delete('/:id', ProductsController.deleteProduct)
export default productRoutes