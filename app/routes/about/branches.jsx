import React from "react";

function branches() {
  return (
    <div className="bg-white text-center justify-center items-center p-26 m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[1000px] justify-center mx-auto">
        <div className="border-2 border-primary p-12">
          <h1 className="font-body text-black">Store locator</h1>
        </div>
        <div className="border-2 border-primary p-12">
          <h1 className="font-body text-black">Map Embed</h1>
        </div>
      </div>
    </div>
  );
}

export default branches;
