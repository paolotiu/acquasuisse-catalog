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

      <p className="text-sm font-body font-semibold mt-2">{product.name}</p>
      <p className="text-xs font-body mt-1">{product.price}</p>
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
      <section className="bg-gray-200 flex flex-col items-center justify-center h-48 sm:h-56 md:pt-128 md:pb-56">
        <h1 className="text-black text-lg font-heading font-bold mb-1 sm:text-xl md:text-5xl">
          Luxury Inspired Perfume
        </h1>
        <p className="text-black text-xs font-thin sm:text-sm md:text-4xl mt-6">
          LONG-LASTING. LUXURY EAU DE PARFUM.
        </p>
      </section>

      {/* Navigation */}  {/* TODO: Optimize Navigation Section of Homepage */} 
      <nav className="bg-gray-300  text-white">
        <div className="max-w-7xl mx-auto flex items-center">
          <a className="hover:underline pt-164 pb-20 px-40" href="#">
            FOR UNISEX
          </a>
          <a
            className="hover:underline  pt-164 pb-20 px-40"
            href="#"
          >
            WOMEN'S
          </a>
          <a
            className="hover:underline  pt-164 pb-20 px-40"
            href="#"
          >
            MEN'S
          </a>
        </div>
      </nav>

      {/* New In Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-red-700 font-heading text-4xl ">New In</h2>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 flex flex-col sm:flex-row sm:items-center sm:space-x-8">
        <div className="w-full sm:w-1/2">
          <div className="bg-gray-300 w-full aspect-square"></div>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 text-center ">
          <h3 className="text-red-700 text-4xl font-heading mb-1">Misc</h3>
          <p className="text-sm font-body mt-2">Product description</p>
          <p className="text-xs font-body mt-1">PHP 0.00</p>
        </div>
      </section>

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
}
