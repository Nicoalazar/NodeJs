import { count } from 'firebase/firestore';
import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      success: true, 
      data: products,
      count: products.length
    });
  } catch (err) {
    res.status(500).json({ 
      success: false, 
      error: 'Error al obtener productos' 
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    if (!id){
      return res.status(400).json({ 
        success: false,
        error: 'ID de producto no proporcionado'
      });
    }
    const product = await productService.getProductById(id);
    if (product) res.status(200).json({
      success: true, 
      data: product
    });
    else res.status(404).json({ 
      success: false, 
      error: 'Producto no encontrado' 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: 'Error al buscar producto'
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    if (!productData) {
      return res.status(400).json({ 
        success: false,
        error: 'Datos de producto no proporcionados'
      });
    }
    const product = await productService.createProduct(productData);
    res.status(201).json({ 
      success: true,
      message: 'Producto creado', 
      data: product 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: 'Error al crear producto' 
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ 
        success: false,
        error: 'ID de producto no proporcionado'
      });
    }
    const deleted = await productService.deleteProduct(id);
    if (deleted){
      res.status(204).json();
    }else{
      res.status(404).json({ 
        success: false,
        error: 'Producto no encontrado'
      });
    }
  } catch (err) {
      res.status(500).json({ 
        success: false,
        error: 'Error al eliminar producto' 
      });
  }
};
