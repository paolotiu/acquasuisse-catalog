import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryCarousel from "../components/Home/CategoryCarousel";
import DesktopCategories from "../components/Home/DesktopCategories";

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
      <div className="w-full aspect-square bg-gray-300 transition-colors duration-300 ease-in-out hover:bg-gray-400"></div>

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
      <section className="bg-gray-200 flex flex-col items-center justify-center pt-69 pb-28 lg:pt-128 lg:pb-56">
        <h1 className="text-black font-heading font-bold mb-1t text-3xl md:text-5xl">
          Luxury Inspired Perfume
        </h1>
        <p className="text-black font-thin text-xl md:text-4xl mt-6">
          LONG-LASTING. LUXURY EAU DE PARFUM.
        </p>
      </section>

      {/* Catalogue Section Mobile View */}
      <div className="my-32 sm:hidden">
        <h2 className="text-primary text-center font-heading text-4xl mb-6">
          Categories
        </h2>
        <CategoryCarousel />
      </div>

      {/* Catalogue Section Desktop View */}
      <DesktopCategories />

      {/* New In Section */}
      <section className="max-w-7xl mx-auto my-32 px-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-primary text-center font-heading text-4xl">
            New In
          </h2>

          <a
            className="text-primary text-xs sm:text-sm font-light uppercase tracking-wide hover:underline hidden sm:flex"
            href="#"
          >
            VIEW ALL
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {newInProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div class="flex justify-center m-8">
          <button class="bg-primary text-white px-5 py-3 font-body hover:bg-red-800 sm:hidden">
            View All
          </button>
        </div>
      </section>
      {/* Misc Section */}
      <section className="max-w-7xl mx-auto my-32 sm:px-6 lg:px-8 mt-32 flex flex-col sm:flex-row sm:items-center sm:space-x-8">
        <div className="w-full sm:w-1/2">
          <div className="bg-gray-300 w-full aspect-square"></div>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 text-center ">
          <h3 className="text-primary text-4xl font-heading mb-1">Misc</h3>
          <p className="text-sm font-body mt-2">Product description</p>
          <p className="text-xs font-body mt-1">PHP 0.00</p>
        </div>
      </section>
      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-8 my-32">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-primary text-center font-heading text-4xl">
            Best Sellers
          </h2>
          <a
            className="text-primary text-xs sm:text-sm font-light uppercase tracking-wide hover:underline hidden sm:flex"
            href="#"
          >
            VIEW ALL
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div class="flex justify-center m-8">
          <button class="bg-primary text-white px-5 py-3 font-body hover:bg-red-800 sm:hidden">
            View All
          </button>
        </div>
      </section>
    </>
  );
    <>
      {/* Hero Section */}
      <section className="bg-gray-200 flex flex-col items-center justify-center pt-29 pb-12  md:pt-69 md:pb-28 lg:pt-128 lg:pb-56">
        <h1 className="text-black text-lg font-heading font-bold mb-1 sm:text-xl md:text-5xl">
          Luxury Inspired Perfume
        </h1>
        <p className="text-black text-xs font-thin sm:text-sm md:text-4xl mt-6">
          LONG-LASTING. LUXURY EAU DE PARFUM.
        </p>
      </section>

      {/* Catalogue Section */}
      <nav className="bg-gray-300 grid grid-cols-3 text-white text-xs sm:text-sm md:text-base font-light tracking-widest uppercase">
        <a
          href="#"
          className="flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline" //relative
        >
          {/* image sample below */}
          {/* <span className="absolute inset-0 bg-[url('https://placehold.co/600x400?bg=cccccc&fg=555555')] bg-cover bg-center filter"></span> */}
          <span
            className="pb-4" //relative
          >
            FOR UNISEX
          </span>
        </a>
        <a
          href="#"
          className=" flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline"
        >
          {/* insert image */}
          <span className="pb-4">WOMEN'S</span>
        </a>
        <a
          href="#"
          className="flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline"
        >
          {/* insert image */}
          <span className="pb-4">MEN'S</span>
        </a>
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