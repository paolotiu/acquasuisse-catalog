import React from "react";

function faq_cards({ item }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {item.map((val) => (
          <div key={val.id}>
            <div className="group h-70 rounded-sm items-start mx-auto text-left border-2 border-primary p-4">
              <h1 className="text-xl font-sans font-bold text-black tracking-wider pointer-events-none">
                {val.question}
              </h1>
              <p className="text-sm font-body text-black tracking-wider pointer-events-none">
                {val.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default faq_cards;
