export function meta() {
  return [
    { title: "Acquasuisse" },
    { name: "description", content: "Acquasuisse" },
  ];
}

function ProductCard({ product }) {
  return (
    <div>
      {/*should be img tag when we have photos for products, placeholder for now */}
      <div className="bg-gray-300 w-full aspect-square"></div>

      <p className="text-xs mt-1 font-normal">{product.name}</p>
      <p className="text-xs font-light">{product.price}</p>
    </div>
  );
}

export default function Home() {
  const newInProducts = [
    { id: 1, name: "Product name", price: "PHP 0.00" }, // should include img, alt properties, for now none because were using divs for placeholder
    { id: 2, name: "Product name", price: "PHP 0.00" },
    { id: 3, name: "Product name", price: "PHP 0.00" },
    { id: 4, name: "Product name", price: "PHP 0.00" },
  ];

  const bestSellers = [
    { id: 1, name: "Product name", price: "PHP 0.00" },
    { id: 2, name: "Product name", price: "PHP 0.00" },
    { id: 3, name: "Product name", price: "PHP 0.00" },
    { id: 4, name: "Product name", price: "PHP 0.00" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-400 flex flex-col items-center justify-center h-48 sm:h-56 md:h-64">
        <h1 className="text-black text-lg sm:text-xl md:text-2xl font-normal mb-1">
          Luxury Inspired Perfume
        </h1>
        <p className="text-black text-xs sm:text-sm md:text-base font-light tracking-widest uppercase">
          LONG-LASTING. LUXURY EAU DE PARFUM.
        </p>
      </section>

      {/* Navigation */}
      <nav className="bg-gray-200 flex justify-center space-x-20 py-6 text-white text-xs sm:text-sm md:text-base font-light tracking-widest uppercase">
        <a className="hover:underline" href="#">
          FOR HIM
        </a>
        <a className="hover:underline" href="#">
          WOMEN'S
        </a>
        <a className="hover:underline" href="#">
          MIXES
        </a>
      </nav>

      {/* New In Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-red-700 text-lg sm:text-xl font-normal">
            New In
          </h2>
          <a
            className="text-red-700 text-xs sm:text-sm font-light uppercase tracking-wide hover:underline"
            href="#"
          >
            VIEW ALL
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {newInProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Misc Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col sm:flex-row sm:items-center sm:space-x-8">
        <div className="w-full sm:w-1/2">
          <div className="bg-gray-300 w-full aspect-square"></div>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 text-center sm:text-left">
          <h3 className="text-red-700 text-lg font-normal mb-1">Misc</h3>
          <p className="text-xs font-light">Product description</p>
          <p className="text-xs font-light mt-1">PHP 0.00</p>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-red-700 text-lg sm:text-xl font-normal">
            Best Sellers
          </h2>
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
}
