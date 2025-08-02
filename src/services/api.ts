import axios, { type AxiosResponse } from "axios";
import type { Product } from "../types/products";

// Fetches product data from the API and returns it as an array of Product objects.
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(import.meta.env.VITE_API_URL, {
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
