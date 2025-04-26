import { useEffect, useRef, useState } from "react";

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

  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const dragTimeout = useRef(null);

  // Snap carousel to center on load and after user interaction ends
  const snapToCenter = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    // Animate scrollLeft to center
    const target = (scrollWidth - clientWidth) / 2;
    smoothScrollTo(carousel, target, 300);
  };

  // Smooth scroll helper
  function smoothScrollTo(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      element.scrollLeft = start + change * easeInOutQuad(progress);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
  }

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    snapToCenter();
    window.addEventListener("resize", snapToCenter);

    function onMouseDown(e) {
      isDragging.current = true;
      carousel.classList.add("active");
      startX.current = e.pageX - carousel.offsetLeft;
      scrollStart.current = carousel.scrollLeft;
      if (dragTimeout.current) {
        clearTimeout(dragTimeout.current);
        dragTimeout.current = null;
      }
    }

    function onMouseUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      carousel.classList.remove("active");
      // Snap to center after short delay to allow momentum scroll
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
      dragTimeout.current = setTimeout(() => {
        snapToCenter();
        dragTimeout.current = null;
      }, 2000);
    }

    function onMouseLeave() {
      if (!isDragging.current) return;
      isDragging.current = false;
      carousel.classList.remove("active");
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
      dragTimeout.current = setTimeout(() => {
        snapToCenter();
        dragTimeout.current = null;
      }, 2000);
    }

    function onMouseMove(e) {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX.current) * 2;
      carousel.scrollLeft = scrollStart.current - walk;
    }

    function onTouchStart(e) {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - carousel.offsetLeft;
      scrollStart.current = carousel.scrollLeft;
      if (dragTimeout.current) {
        clearTimeout(dragTimeout.current);
        dragTimeout.current = null;
      }
    }

    function onTouchEnd() {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
      dragTimeout.current = setTimeout(() => {
        snapToCenter();
        dragTimeout.current = null;
      }, 2000);
    }

    function onTouchMove(e) {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX.current) * 2;
      carousel.scrollLeft = scrollStart.current - walk;
    }

    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("mouseup", onMouseUp);
    carousel.addEventListener("mouseleave", onMouseLeave);
    carousel.addEventListener("mousemove", onMouseMove);
    carousel.addEventListener("touchstart", onTouchStart);
    carousel.addEventListener("touchend", onTouchEnd);
    carousel.addEventListener("touchcancel", onTouchEnd);
    carousel.addEventListener("touchmove", onTouchMove);

    return () => {
      window.removeEventListener("resize", snapToCenter);
      carousel.removeEventListener("mousedown", onMouseDown);
      carousel.removeEventListener("mouseup", onMouseUp);
      carousel.removeEventListener("mouseleave", onMouseLeave);
      carousel.removeEventListener("mousemove", onMouseMove);
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchend", onTouchEnd);
      carousel.removeEventListener("touchcancel", onTouchEnd);
      carousel.removeEventListener("touchmove", onTouchMove);
      if (dragTimeout.current) clearTimeout(dragTimeout.current);
    };
  }, []);

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
      {/* Catalogue Section */}
      <div className="my-32 sm:hidden">
        <h2 className="text-primary text-center font-heading text-4xl mb-6">
          Categories
        </h2>
        <nav
          ref={carouselRef}
          tabIndex={0}
          className="flex space-x-4 overflow-x-auto text-white no-scrollbar scrollbar-hidden cursor-grab active:cursor-grabbing"
        >
          <a
            href="#"
            role="listitem"
            draggable={false}
            className="flex-shrink-0 w-58 h-82  bg-center bg-cover flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline bg-gray-300 " //relative
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
            role="listitem"
            draggable={false}
            className="flex-shrink-0 w-58 h-82 bg-center bg-cover flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline bg-gray-300 "
          >
            {/* insert image */}
            <span className="pb-4">WOMEN'S</span>
          </a>
          <a
            href="#"
            role="listitem"
            draggable={false}
            className="flex-shrink-0 w-58 h-82 bg-center bg-cover flex items-end justify-center h-40 md:h-90 lg:h-180 hover:underline bg-gray-300 "
          >
            {/* insert image */}
            <span className="pb-4">MEN'S</span>
          </a>
        </nav>
      </div>

      <nav className="bg-gray-300  text-white text-xs sm:text-sm md:text-base font-light tracking-widest uppercase hidden sm:grid sm:grid grid-cols-3">
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
          <button class="bg-primary text-white px-5 py-3 font-body sm:hidden">
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
          <button class="bg-primary text-white px-5 py-3 font-body  sm:hidden">
            View All
          </button>
        </div>
      </section>
    </>
  );
}
