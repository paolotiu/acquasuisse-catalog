export function meta() {
    return [
      { title: "Acquasuisse - Catalogue" },
      { name: "description", content: "Acquasuisse" },
    ];
  }

   

  export default function Product() {
    return (
      <>
      {/* Product Main Info includes Photos and Description */}
      <section className="h-screen bg-white flex mb-10">

        {/* This is where photos go */}
        <div className="block w-5/12 pt-24 pr-16 pb-28 pl-44">
          {/* Main PHOTO */}
          <div className="bg-gray-500 w-full h-3/4 mb-10"></div>
          {/* OTHER PHOTOs */}
          <div className="flex">
            <div className="bg-gray-100 aspect-square w-1/4 mr-1"></div>
            <div className="bg-gray-200 aspect-square w-1/4 mr-1 "></div>
            <div className="bg-gray-300 aspect-square w-1/4 mr-1"></div>
            <div className="bg-gray-400 aspect-square w-1/4 mr-1"></div>

          </div>
          
        </div>

        {/* Product Title and Description */}
        <div className="bg-white w-7/12 pt-32 pr-50 pb-28 pl-6 ">
          <h1 className="text-red-700 text-4xl mb-4">Scent Name</h1>
          <h2 className="text-black text-base italic mb-10">Eau de Parfum</h2>

          <p className="text-gray-500 text-xl mb-5">Main Accords:</p>
          <p className="text-transform: uppercase;flex flex-wrap mb-5">FLORAL, WHITE FLORAL, AQUATIC, FRUITY, TUBEROSE, 
            SWEET, POWDERY, MUSKY WOODY, FRESH, CITRUS</p>
          
          <p className="text-gray-500 text-xl mb-5">Inspired by:</p>
          <p className="flex-wrap mb-10">Britney Spears Curious</p>

        {/* Sizes and Prices */}
        <div className="flex flex-wrap gap-2.5">

          <div className="block">
            <div className="align-middle text-xl text-center w-fit h-14 bg-gray-100 rounded-2xl border-black py-2.5 px-6.5 mb-10"> 100mL</div>
            <p className="align-middle text-center">PHP 129.00</p>
          </div>

          <div className="block">
            <div className="align-middle text-xl text-center w-fit h-14 bg-gray-100 rounded-2xl border-black py-2.5 px-6.5 mb-10"> 100mL</div>
            <p className="align-middle text-center">PHP 129.00</p>
          </div>

          <div className="block">
            <div className="align-middle text-xl text-center w-fit h-14 bg-gray-100 rounded-2xl border-black py-2.5 px-6.5 mb-10"> 100mL</div>
            <p className="align-middle text-center">PHP 129.00</p>
          </div>

          <div className="block">
            <div className="align-middle text-xl text-center w-fit h-14 bg-gray-100 rounded-2xl border-black py-2.5 px-6.5 mb-10"> 100mL</div>
            <p className="align-middle text-center">PHP 129.00</p>
          </div>

          <div className="block">
            <div className="align-middle text-xl text-center w-fit h-14 bg-gray-100 rounded-2xl border-black py-2.5 px-6.5 mb-10"> 100mL</div>
            <p className="align-middle text-center">PHP 129.00</p>
          </div>
        </div>
        </div>
      </section>

      {/* LUXURY PERFUME | STABILITY */}
      <section className="items-center flex py-10 w-full">
        <div className="w-1/2 text-2xl items-center text-center text-red-700 mx-auto">
        <h3 className="text-2xl text-red-700 mb-3">Luxury Perfume</h3>
        <p className="m-auto text-black text-sm flex-wrap w-1/2">REDISCOVER YOUR SIGNATURE SCENT.
        REUSE & REFILL YOUR BOTTLE.</p>
        </div>

        <div className="w-1/2  items-center text-center text-red-700 mx-auto">
        <h3 className="text-2xl text-red-700 mb-3">Sustainability</h3>
        <p className="m-auto text-black text-sm flex-wrap w-1/2">REDISCOVER YOUR SIGNATURE SCENT.
        REUSE & REFILL YOUR BOTTLE.</p>
        </div>
        
      </section>
      </>
    )
  }
  