
import { bestSellers } from "./products2"; 

export function meta() {
  return [
    { title: "Acquasuisse - Best Sellers" },
    { name: "description", content: "Discover new luxury perfumes from Acquasuisse" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { 
      rel: "stylesheet", 
      href: "https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Montserrat:wght@400;500;600&display=swap"
    },
  ];
}

function ProductCard({ product }) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-square overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
      <p className="text-sm font-body font-medium mt-2 text-gray-900 dark:text-gray-100">{product.name}</p>
      <p className="text-xs font-body text-gray-600 dark:text-gray-400 mt-1">{product.description}</p>
      <p className="text-xs font-body mt-1 text-gray-900 dark:text-gray-100">{product.price}</p>
    </div>
  );
}

export default function BestSellers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900">
      <div className="w-full py-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-12">
        <h2 className="text-gray-700 dark:text-gray-300 text-3xl font-light uppercase tracking-wider" style={{ fontFamily: "'Julius Sans One', sans-serif" }}>
          Find your signature scent
        </h2>
      </div>

      <h1 className="text-red-700 dark:text-red-500 font-heading text-3xl text-center mb-8">
        Unisex
      </h1>

      <div className="flex justify-center items-center mb-12 space-x-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <span className="text-sm font-medium text-black dark:text-white">Filter:</span>
        <div className="relative">
          <select className="appearance-none border-b border-gray-400 dark:border-gray-600 pr-8 py-1 text-sm focus:outline-none bg-transparent text-gray-900 dark:text-gray-100">
            <option>Category</option>
            <option>Unisex</option>
            <option>Women's</option>
            <option>Men's</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
