import Luxury from "/Luxury.png"
import Sustainability from "/Sustainability.png"


export function meta() {
    return [
      { title: "Acquasuisse - Catalogue" },
      { name: "description", content: "Acquasuisse" },
    ];
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

        {/* Product Title and Description */}
        <div className="flex flex-col items-start w-7/12 pt-32 pr-32 pb-11 pl-8">
          <h1 className="text-red-700 text-4xl mb-4">Scent Name</h1>
          <h2 className="text-black text-base italic mb-12">Eau de Parfum</h2>

          <p className="text-gray-500 text-xl mb-5">Main Accords:</p>
          <p className="text-transform: uppercase;flex flex-wrap mb-5">FLORAL, WHITE FLORAL, AQUATIC, FRUITY, TUBEROSE, 
            SWEET, POWDERY, MUSKY WOODY, FRESH, CITRUS</p>
          
          <p className="text-gray-500 text-xl mb-5">Inspired by:</p>
          <p className="flex-wrap pb-11.5">Britney Spears Curious</p>

        {/* Sizes and Prices */}
        <div className="flex flex-wrap pt-12 gap-2.5" >
          {sizes.map((product, index)=>(
            <div className="block">
              <div className="align-middle text-xl text-center w-fit h-fit bg-gray-100 rounded-2xl border-black py-2.5 px-6.5">{product.size}</div>
              <p className="mt-5 align-stretch text-center">{product.price}</p>
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
    <h3 className="text-2xl mb-3">Luxury Perfume</h3>
    <p className="text-black text-sm ">
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
    <h3 className="text-2xl mb-3">Sustainability</h3>
    <p className="text-black text-sm">
      REDISCOVER YOUR SIGNATURE SCENT.<br />
      REUSE & REFILL YOUR BOTTLE.
    </p>
  </div>
    </section>
    
    <section className="flex-row">
    <h2 className="text-black text-base mx-16 my-5">Other Scents</h2>
    {products.map((item, index) => (
      <div >

      </div>
    ))}
    </section>
    </>
    )
  }
  