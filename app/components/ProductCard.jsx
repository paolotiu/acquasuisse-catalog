export default function ProductCard({ product }) {
  return (
   <div key={product.id} className="mb-10 transition-transform hover:translate-y-[-5px]">
              <div className="bg-gray-200 w-full h-64 mb-4">
                 <img
          src={product.image}
          alt={product.name}
          className="w-full h-full"
        />
              </div>
              <h3 className="font-semibold mb-1">{product.name}</h3>
              <p className="text-sm mb-1">{product.description}</p>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
  );
}
