import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Product } from "../types/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`break-inside-avoid   mb-6 overflow-hidden cursor-pointer`}>
      <div className={`overflow-hidden ${theme.cardBg} rounded-lg p-6`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-cover mb-4 hover:scale-105 transition-transform duration-300 overflow-hidden"
        />
      </div>

      <div className="px-2 mt-4">
        <h3 className="text-base font-semibold truncate">{product.title}</h3>
        <p className="text-base">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
