import Luxury from "/Luxury.png"
import Sustainability from "/Sustainability.png"


export function meta() {
    return [
      { title: "Acquasuisse - Catalogue" },
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

  export default function Product() {
    const sizes = [
      { size: "10 mL", price: "PHP 129.00" },
      { size: "30 mL", price: "PHP 350.00" },
      { size: "50 mL", price: "PHP 560.00" },
      { size: "60 mL", price: "PHP 660.00" },
      { size: "100 mL", price: "PHP 1070.00" },
    ];

    const products = [
      {name: "Product name", description: "Description", price: "PHP 00.00"},
      {name: "Product name", description: "Description", price: "PHP 00.00"},
      {name: "Product name", description: "Description", price: "PHP 00.00"},
      {name: "Product name", description: "Description", price: "PHP 00.00"},
      {name: "Product name", description: "Description", price: "PHP 00.00"},
      {name: "Product name", description: "Description", price: "PHP 00.00"},
    ]
    
    return (
      <>
      {/* Product Main Info includes Photos and Description */}
      <section className="bg-white flex">

        {/* This is where photos go */}
        <div className="block w-5/12 pt-26 pr-20 pb-28 pl-40">
          {/* Main PHOTO */}
          <div className="bg-gray-500 w-full h-4/5 mb-10"></div>
          {/* OTHER PHOTOs */}
          <div className="flex">
            <div className="bg-gray-100 aspect-square w-1/4 mr-1"></div>
            <div className="bg-gray-200 aspect-square w-1/4 mr-1 "></div>
            <div className="bg-gray-300 aspect-square w-1/4 mr-1"></div>
            <div className="bg-gray-400 aspect-square w-1/4 mr-1"></div>
          </div>
          
        </div>

        {/* Product Name, Type and Accord */}
        <div className="flex flex-col items-start w-7/12 pt-32 pr-32 pb-11 pl-8">

          {/*Product Name */}
          <h1 className="font-heading text-red-700 text-4xl mb-4">Scent Name</h1>
          
          {/*Product Type */}
          <h2 className="font-body text-black/50 text-base italic mb-12">Eau de Parfum</h2>

          {/*Product Accord */}
          <p className="font-body text-gray-500 text-xl mb-5">Main Accords:</p>
          <p className="font-body text-transform: uppercase;flex flex-wrap mb-5">FLORAL, WHITE FLORAL, AQUATIC, FRUITY, TUBEROSE, 
            SWEET, POWDERY, MUSKY WOODY, FRESH, CITRUS</p>
          
          <p className="font-body text-gray-500 text-xl mb-5">Inspired by:</p>
          <p className="font-body flex-wrap pb-11.5">Britney Spears Curious</p>

        {/* Sizes and Prices */}
        <div className="flex flex-wrap pt-12 gap-2.5" >
          {sizes.map((product, index)=>(
            <div className="block">
              <div className="align-middle text-xl text-center w-fit h-fit bg-gray-100 rounded-2xl border-black py-2.5 px-6.5">{product.size}</div>
              <p className="font-body text-black/50 mt-5 align-stretch text-center">{product.price}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* LUXURY PERFUME | STABILITY */}
  <section className="flex justify-center items-start pt-11 pb-6 w-full gap-64">

  {/* Luxury */}
  <div className="w-80 flex flex-col items-center text-center text-red-700">
    <img
      src={Luxury}
      alt="Luxury"
      className="object-contain h-14 w-auto mb-4"
    />
    <h3 className="font-heading text-2xl mb-3">Luxury Perfume.</h3>
    <p className="text-black/50 text-sm ">
      REDISCOVER YOUR SIGNATURE SCENT.<br />
      REUSE & REFILL YOUR BOTTLE.
    </p>
  </div>

  {/* Sustainability */}
    <div className="w-80 flex flex-col items-center text-center text-red-700">
    <img
      src={Sustainability}
      alt="Sustainability"
      className="object-contain h-14 w-auto mb-4"
    />
    <h3 className="font-heading text-2xl mb-3">Sustainability.</h3>
    <p className="text-black/50 text-sm">
    MADE WITH THE FINEST FRAGRANCE.<br />
    OILS FROM SWITZERLAND.
    </p>
  </div>
    </section>
    
  <section className="mx-auto pt-13 pb-26">
  <h2 className="font-body text-gray-500 text-base mx-4 my-5">OTHER SCENTS</h2>
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-4 px-4 snap-x snap-mandatory">
      {products.map((product) => (
        <div key={product.id} className="min-w-[200px] snap-start">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
</section>
    </>
    )
  }
  