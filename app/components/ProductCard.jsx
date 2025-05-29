export default function ProductCard({ product }) {
  return (
    <div>
      {/*should be img tag when we have photos for products, placeholder for now */}
      <div className="w-full aspect-square bg-gray-300 transition-colors duration-300 ease-in-out hover:bg-gray-400"></div>
      <p className="text-sm font-body font-semibold mt-2">{product.name}</p>
      <p className="text-xs font-body mt-1">{product.price}</p>
    </div>
  );
}
