<<<<<<< Updated upstream
export function meta() {
    return [
      { title: "Acquasuisse" },
      { name: "description", content: "Acquasuisse" },
    ];
  }
  
  function ProductCard({ product }) {
    return (
      <div>
        <div className="w-full aspect-square bg-gray-300 transition-colors duration-300 ease-in-out hover:bg-gray-400"></div>
  
        <p className="text-sm font-body font-semibold mt-2">{product.name}</p>
        <p className="text-xs font-body mt-1">{product.price}</p>
      </div>
    );
  }
  
export const bestSellers = [
      { id: 1, name: "Product name", price: "PHP 0.00" },
      { id: 2, name: "Product name", price: "PHP 0.00" },
      { id: 3, name: "Product name", price: "PHP 0.00" },
      { id: 4, name: "Product name", price: "PHP 0.00" },
    ];

    return(
        <>
    {/* Best Sellers Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-32">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-red-700 text-4xl font-heading">Best Sellers</h2>
      <a
        className="text-red-700 text-xs sm:text-sm font-light uppercase tracking-wide hover:underline"
        href="#"
      >
        VIEW ALL
      </a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {bestSellers.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
</>
);
=======
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";

export default function ProductCatalog() {
  // State to store products loaded from JSON
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect to fetch products from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with JSON file path containing products later
        const response = await fetch('/data/products.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center py-12">Loading products...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center py-12 text-red-600">Error loading products: {error}</div>;
  }

  return (
    <>
      <header className="bg-gray-100 py-6">
        <h1 className="text-center text-sm uppercase tracking-wider font-light">
          Find Your Signature Scent
        </h1>
      </header>

      <main className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-red-600 text-2xl my-8">
          All Products
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="flex gap-6 items-center">
            <button className="px-4 py-2">
              Filter:
            </button>
            <button className="px-4 py-2 flex items-center gap-2">
              Category
              <ArrowDownIcon className="h-3 fill-current" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-12 md:grid-cols-3 sm:grid-cols-2">
          {products.map(product => (
            <div key={product.id} className="mb-10 transition-transform hover:translate-y-[-5px]">
              <div className="bg-gray-200 w-full h-64 mb-4"></div>
              <h3 className="font-semibold mb-1">{product.name}</h3>
              <p className="text-sm mb-1">{product.description}</p>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
      <Outlet/>
    </>
  );
}
>>>>>>> Stashed changes
