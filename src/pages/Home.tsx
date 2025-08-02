import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";
import Header from "../components/Header";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Product } from "../types/products";
import FeaturedProduct from "../components/FeaturedProduct";

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      if (data.length > 0) {
        setProducts(data);
      } else {
        setError("Failed to fetch products");
      }
      setLoading(false);
    };
    loadProducts();
  }, []);
  console.log("Hello");

  if (error) return <div className="pt-16 text-center">{error}</div>;

  return (
    <>
      <Header />
      <div
        className={`${theme.background} ${theme.fontFamily} ${theme.transition} `}
      >
        <div className={`min-h-screen w-full max-w-7xl mx-auto p-4`}>
          <div className={`flex flex-col md:flex-row gap-6 `}>
            {theme.layout === "sidebar" && (
              <>
                <aside className="w-44 shrink-0 p-4 h-screen md:block hidden">
                  <Title text="Collection" />
                  <ul>
                    <li className="mb-2  hover:underline cursor-pointer ">
                      Men's Clothing
                    </li>
                    <li className="mb-2 hover:underline cursor-pointer  ">
                      Women's Clothing
                    </li>
                    <li className="mb-2  hover:underline cursor-pointer ">
                      Electronics
                    </li>
                    <li className="mb-2  hover:underline cursor-pointer">
                      Jewelery
                    </li>
                  </ul>
                </aside>

                <select
                  aria-label="Collection"
                  className={`border border-gray-400 p-2 rounded-sm md:hidden focus:outline-none ${theme.background} cursor-pointer px-3`}
                >
                  <option value="men">Men's Clothing</option>
                  <option value="women">Women's Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                </select>
              </>
            )}

            <div className="min-w-0 flex-1 overflow-hidden">
              <main className="space-y-8 w-full">
                {products.length > 0 && (
                  <FeaturedProduct product={products[0]} />
                )}

                <div className="w-full">
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {products.map((product, i) =>
                      i !== 0 ? (
                        <ProductCard key={product.id} product={product} />
                      ) : null
                    )}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
