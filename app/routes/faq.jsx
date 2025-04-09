import React from "react";
import Card from "../components/faq_cards";
import faq_data from "../data/faq_data";

function faq() {
  const item = faq_data;
  return (
    <>
      <div className="bg-white text-center justify-center items-center p-26">
        <div className="flex flex-col justify-center w-full">
          <div className="p-12">
            <h1 className="text-primary font-heading text-5xl">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="mx-auto max-w-[1080px] w-full">
            <Card item={item} />
          </div>
        </div>
      </div>
    </>
  );
}

export default faq;
