// services/products.service.js
import * as ProductModel from '../models/product.model.js';

export const getAllProducts = async () => {
  return await ProductModel.getAll();
};

export const getProductById = async (id) => {
  return await ProductModel.getById(id);
};

export const createProduct = async (product) => {
  return await ProductModel.create(product);
};

export const deleteProduct = async (id) => {
  return await ProductModel.remove(id);
};
