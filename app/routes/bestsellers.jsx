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
