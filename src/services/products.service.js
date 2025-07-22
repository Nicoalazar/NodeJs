import * as ProductModel from '../models/product.model.js';

export const getAllProducts = async () => {
  return await ProductModel.getAll();
};

export const getProductById = async (id) => {
  return await ProductModel.getById(id);
};

export const createProduct = async (product) => {
  const productId = await ProductModel.createProduct(product);
  return {
    id: productId,
    ...product,
  };
};

export const deleteProduct = async (id) => {
  await ProductModel.deleteProduct(id);
  return true;
};
