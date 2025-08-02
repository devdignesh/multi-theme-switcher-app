import axios, { type AxiosResponse } from "axios";
import type { Product } from "../types/products";

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
