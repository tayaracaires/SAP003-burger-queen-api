import { Router } from 'express';
import TablesController from '../controllers/TablesController';

const tablesRoutes = Router()
tablesRoutes.get('/', TablesController.getAllTables)
tablesRoutes.post('/', TablesController.addTable)
tablesRoutes.get('/:id', TablesController.getTable)
tablesRoutes.put('/:id', TablesController.updatedTable)
tablesRoutes.delete('/:id', TablesController.deleteTable)
module.exports = tablesRoutes