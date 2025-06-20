import { men } from "./products2";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Acquasuisse - For Men" },
    {
      name: "description",
      content: "Discover new luxury perfumes from Acquasuisse",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Montserrat:wght@400;500;600&display=swap",
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
      <p className="text-sm font-body font-medium mt-2 text-gray-900 dark:text-gray-100">
        {product.name}
      </p>
      <p className="text-xs font-body text-gray-600 dark:text-gray-400 mt-1">
        {product.description}
      </p>
      <p className="text-xs font-body mt-1 text-gray-900 dark:text-gray-100">
        {product.price}
      </p>
    </div>
  );
}

export default function MenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900">
      <div className="w-full py-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-12">
        <h2
          className="text-gray-700 dark:text-gray-300 text-3xl font-light uppercase tracking-wider"
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          Find your signature scent
        </h2>
      </div>

      <h1 className="text-red-700 dark:text-red-500 font-heading text-3xl text-center mb-8">
        For Men
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {men.map((product) => (
          <Link to={`/product/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
