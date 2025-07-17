import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ error: 'Producto no encontrado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar producto' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ message: 'Producto creado', data: product });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    if (deleted)
      res.json({ message: `Producto con ID ${req.params.id} eliminado` });
    else
      res.status(404).json({ error: 'Producto no encontrado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
