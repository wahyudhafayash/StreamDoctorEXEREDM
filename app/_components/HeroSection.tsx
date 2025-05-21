import React from "react";

const HeroSection = () => {
  return (
    <div className="text-transparent bg-clip-text bg-[url('/BGText.webp')] mx-40">
      <div className="flex flex-col items-center justify-center pt-12 mx-20">
        <h1
          className="text-[100px] font-bold tracking-wider"
          style={{ fontFamily: "RDR" }}
        >
          DOCTOR STREAM
        </h1>
        <p
          className="text-4xl  font-bold tracking-wider"
          style={{ fontFamily: "RDR Lino Regular" }}
        >
          #EXECUTIVEREDM
        </p>
      </div>

      <div className="flex items-center justify-center gap-10 mt-10 mx-72">
        <span>
          <img src="/dot.webp" alt="" />
        </span>
        <h1 className="text-[30px] font-bold tracking-wider">DOCTOR</h1>
        <span>
          <img src="/dot.webp" alt="" />
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
