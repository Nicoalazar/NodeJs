// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// Rutas base
app.use('/api/products', productRouter);
app.use('/auth', authRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Productos funcionando correctamente.');
});

// Middleware 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
