import React from "react";
import AboutBanner from "../assets/products/AboutBanner.jpg";
import CustomerImage from "../assets/products/CustomerImage.jpg";
import PerfumeShoot_1 from "../assets/products/PerfumeShoot_1.jpg";
import PerfumeShoot_2 from "../assets/products/PerfumeShoot_2.jpg";

function about() {
  return (
    <>
      <div className="bg-white text-center justify-center items-center">
        <div
          className="text-center justify-center w-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutBanner})` }}
        >
          <h1 className="font-[Julius_Sans_One] text-black text-6xl uppercase bg-white/40 w-full h-full p-32">
            The <span className="font-[Jost] text-primary">First</span> <br />{" "}
            of its kind
          </h1>
        </div>
        <div className="text-center font-body justify-center items-center text-black text-xl py-24 px-12 lg:px-24 max-w-[1000px] m-auto">
          <h1 className="font-heading text-primary text-4xl pb-16">About Us</h1>
          <p>
            Acquasuisse is the{" "}
            <span className="font-bold">first of its kind</span> fragrance
            retail station which features unique semi-automated bottle
            dispensers.
          </p>
          <br />
          <p>
            Established in December of 2007, Acquasuisse offers{" "}
            <span className="font-bold">
              trendy, quality, imported fragrances
            </span>{" "}
            at a fraction of the cost of top designer perfume brands.
          </p>
        </div>
        <div className="grid grid-cols-3 md:gap-4 lg:gap-12 justify-center items-center pb-24 px-12 max-w-[1000px] m-auto">
          <img src={PerfumeShoot_2} className="object-cover h-76 w-84" />
          <img src={CustomerImage} className="object-cover h-76 w-84" />
          <img src={PerfumeShoot_1} className="object-cover h-76 w-84" />
        </div>
      </div>
    </>
  );
}

export default about;
