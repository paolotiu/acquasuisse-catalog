import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

import Luxury from "/Luxury.png";
import Sustainability from "/Sustainability.png";

export function meta() {
  return [
    { title: "Acquasuisse - Catalogue" },
    { name: "description", content: "Acquasuisse" },
  ];
}

export default function Product() {
  const { productId } = useParams(); // Get productId from URL params
  const product =  products[parseInt(productId, 10)];  // Dynamically select the product based on the ID
  
  const sizes = [
    { size: "10 mL", price: "PHP 129.00" },
    { size: "30 mL", price: "PHP 350.00" },
    { size: "50 mL", price: "PHP 560.00" },
    { size: "60 mL", price: "PHP 660.00" },
    { size: "100 mL", price: "PHP 1070.00" },
  ];

  if (!product) {
    return <div>Product not found</div>; // Handle invalid product ID
  }

  return (
    <>
      {/* Product Main Info */}
      <section className="bg-white flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        {/* Photos */}
        <div className="w-full lg:w-5/12 pt-12 pb-16 px-0 lg:px-20 flex flex-col items-center lg:items-start">
          {/* Main PHOTO */}
          <div
            className="bg-gray-500 w-full h-[22rem] mb-10 sm:rounded-none"
            style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover' }}
          ></div>

          {/* Thumbnails */}
          <div className="flex justify-between w-full px-0 lg:gap-1">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="bg-gray-100 w-[5.75rem] h-[3.6875rem]"></div>
            ))}
          </div>
        </div>

        {/* Product Description */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-7/12 pt-12 lg:pt-32 pr-6 lg:pr-32 pb-11 pl-6 lg:pl-8 text-center lg:text-left">
          <h1 className="text-red-700 text-4xl mb-4">{product.name}</h1>
          <h2 className="text-black text-base italic mb-12">Eau de Parfum</h2>

          <p className="text-gray-500 text-xl mb-5">Main Accords:</p>
          <p className="text-transform: uppercase; flex flex-wrap mb-5">
            {product.mainAccords}
          </p>

          <p className="text-gray-500 text-xl mb-5">Inspired by:</p>
          <p className="flex-wrap pb-11.5">{product.inspiredBy}</p>

          <div className="flex flex-wrap justify-center lg:justify-start pt-12 gap-2.5">
            {sizes.map((size, index) => (
              <div key={index} className="block">
                <div className="align-middle text-xl text-center w-fit h-fit bg-gray-100 rounded-2xl border-black py-2.5 px-6.5">
                  {size.size}
                </div>
                <p className="mb-5 mt-5 align-stretch text-center">{size.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LUXURY & SUSTAINABILITY */}
      <section className="flex flex-col md:flex-row justify-center items-center pt-11 pb-6 w-full gap-10 md:gap-64 px-6 text-center">
        <div className="w-80 flex flex-col items-center text-red-700">
          <img
            src={Luxury}
            alt="Luxury"
            className="object-contain h-14 w-auto mb-4"
          />
          <h3 className="text-2xl mb-3">Luxury Perfume</h3>
          <p className="text-black text-sm">
            REDISCOVER YOUR SIGNATURE SCENT.<br />
            REUSE & REFILL YOUR BOTTLE.
          </p>
        </div>

        <div className="w-80 flex flex-col items-center text-red-700 mt-10 md:mt-0">
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

      {/* Other Scents */}
      <section className="mx-auto pt-13 pb-26 w-full">
        <h2 className="text-black text-base mx-4 my-5">Other Scents</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 px-4 snap-x snap-mandatory">
            {Object.keys(products).map((productId, index) => {
              const product = products[productId];
              return (
                <div key={index} className="min-w-[160px] sm:min-w-[200px] md:min-w-[220px] snap-start">
                  <div className="bg-gray-200 aspect-square w-full">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                  </div>
                  <p className="text-sm mt-2">{product.name}</p>
                  {/* Add price for each product if it's available */}
                  <p className="text-xs">{product.price || 'Price unavailable'}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
