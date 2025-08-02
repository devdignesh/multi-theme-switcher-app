import { useContext } from "react";
import type { Product } from "../types/products";
import { ThemeContext } from "../context/ThemeContext";

interface ProductCardProps {
  product: Product;
}

const FeaturedProduct: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme.card} rounded-lg aspect-[21/9] flex  justify-between items-center sm:p-4 p-6`}
    >
      <div className="sm:px-4 sm:w-1/2 flex flex-col justify-center space-y-2">
        <span className="text-2xl sm:text-3xl font-bold">
          Discover our Curated Collection
        </span>
        <p className="">
          Explore our carefully selected products for your home and lifestyle.
        </p>
        <div className="flex flex-row mt-2">
          <button className={`${theme.button} px-4 sm:px-6 py-2 rounded-full font-medium cursor-pointer`}>
            Shop now
          </button>
        </div>
      </div>
      <div className="w-1/2 hidden justify-center items-center sm:flex">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-90 object-contain mb-4 rounded"
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;
