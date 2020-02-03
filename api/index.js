import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from './routes/productRoutes';
import itemsRoutes from './routes/itemsRoutes'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/api/products', productRoutes)
app.use("/api/items", itemsRoutes);

app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to Buger Queen API.',
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app