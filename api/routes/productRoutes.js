
import { Router } from 'express'
import productsController from '../controllers/productController'

const productRoutes = Router()
productRoutes.get('/', productsController.getAllProducts)
productRoutes.post('/', productsController.addProduct)
productRoutes.get('/:id', productsController.getProduct)
productRoutes.put('/:id', productsController.updatedProduct)
productRoutes.delete('/:id', productsController.deleteProduct)
export default productRoutes