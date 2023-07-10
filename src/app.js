import express from 'express';
import morgan from 'morgan';
import productsRoutes from './routes/productsRoutes';
import authRoutes from './routes/authRoutes';

const app = express()


app.use(express.json())
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json('bienvenido')
})

app.use('/products', productsRoutes);
app.use('/auth', authRoutes);


export default app;