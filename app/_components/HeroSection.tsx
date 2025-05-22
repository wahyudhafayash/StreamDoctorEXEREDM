import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="text-transparent bg-clip-text bg-[url('/BGText.webp')] ">
      <div className="flex flex-col items-center justify-center pt-16 lg:pt-12 ">
        <h1
          className="text-4xl md:text-6xl lg:text-[100px] font-bold tracking-wider"
          style={{ fontFamily: "RDR" }}
        >
          DOCTOR STREAM
        </h1>
        <p
          className="text-md md:text-2xl lg:text-4xl mt-2 lg:pt-0 font-bold tracking-wider"
          style={{ fontFamily: "RDR Lino Regular" }}
        >
          #EXECUTIVEREDM
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 lg:gap-10 mt-10 mx-4 lg:mx-60">
        {/* Dots (left) */}
        <span>
          {/* Mobile & tablet: text dots */}
          <h1 className="block lg:hidden text-[20px] md:text-[30px] tracking-wider">
            <span className="block md:hidden">• • • • • •</span>
            <span className="hidden md:block">• • • • • • • • • •</span>
          </h1>

          {/* Desktop: dot image */}
          <span className="hidden lg:block">
            <Image
              src="/dot.webp"
              alt="Dot icon"
              width={800}
              height={800}
              priority
            />
          </span>
        </span>

        {/* Text */}
        <h1 className="text-lg md:text-2xl lg:text-[30px] font-bold tracking-wider">
          DOCTOR
        </h1>

        {/* Dots (right) — same as left */}
        <span>
          <h1 className="block lg:hidden text-[20px] md:text-[30px] tracking-wider">
            <span className="block md:hidden">• • • • • •</span>
            <span className="hidden md:block">• • • • • • • • • •</span>
          </h1>

          <span className="hidden lg:block">
            <Image
              src="/dot.webp"
              alt="Dot icon"
              width={800}
              height={800}
              priority
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
