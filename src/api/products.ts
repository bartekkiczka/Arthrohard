import { Product } from '../types/Product';
import api from './api';

export const getProducts = async (pageNumber: number, pageSize: number) => {
  const response = await api.get(
    `?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return response;
};
