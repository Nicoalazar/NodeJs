import express from 'express';
import * as productController from '../controllers/products.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const productRouter = express.Router();

// Aplicamos el middleware en todas las rutas
productRouter.use(authenticateToken);

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/create', productController.createProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
