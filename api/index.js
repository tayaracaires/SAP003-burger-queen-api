import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from './routes/productRoutes';
import orderItemsRoutes from './routes/orderItemsRoutes';
import ordersRoutes from './routes/ordersRoutes';
import tablesRoutes from './routes/tablesRoutes';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/api/products', productRoutes);
app.use('/api/items', orderItemsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/tables', tablesRoutes);

app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to Buger Queen API.',
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app