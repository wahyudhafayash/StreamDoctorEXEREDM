"use client";

import React, { useState, useEffect } from "react";

const clinics = [
  {
    name: "KLINIK ST DENIS",
    members: [
      "Aithne Eirdis",
      "Enzy Emily",
      "Ale De Jong",
      "Bopak Zhang",
      "Henrietta Seraphina",
    ],
  },
  {
    name: "KLINIK VALENTINE",
    members: ["Arthur De Medicis", "", "", "", ""],
  },
  {
    name: "RHODES",
    members: ["James Floch", "Malika Sakari", "Kanaka Kendall", "", ""],
  },
  {
    name: "EMERALD RANCH",
    members: ["Benny Da Firenze", "", "", "", ""],
  },
  {
    name: "BLACKWATER",
    members: [
      "Marshall River",
      "Berlin De Amber",
      "Jacques Arnaud",
      "Daniil Clerk",
      "",
    ],
  },
  {
    name: "STRAWBERRY",
    members: [
      "Max Von Edinburgh",
      "Cody McNeil",
      "Hayln Denali",
      "Josie Mikaelson",
      "",
    ],
  },
  {
    name: "FORT WALLACE",
    members: ["Xue Pai Lai", "", "", "", ""],
  },
];

const ClinicList = () => {
  const [boldMap, setBoldMap] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const newMap: { [key: string]: boolean } = {};
    clinics.forEach((clinic, clinicIndex) => {
      clinic.members.forEach((_, memberIndex) => {
        const key = `${clinicIndex}-${memberIndex}`;
        newMap[key] = Math.random() < 0.4;
      });
    });
    setBoldMap(newMap);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center mt-10 space-y-12 text-transparent bg-clip-text bg-[url('/BGText.webp')]"
      style={{ fontFamily: "RDR" }}
    >
      {/* Desktop layout (4-3) */}
      <div className="hidden lg:flex flex-col space-y-12">
        {[0, 1].map((rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-start justify-center gap-8 lg:gap-40 lg:px-0"
          >
            {clinics
              .slice(rowIndex === 0 ? 0 : 4, rowIndex === 0 ? 4 : 7)
              .map((clinic, clinicIndexGlobal) => {
                const clinicIndex =
                  rowIndex === 0 ? clinicIndexGlobal : clinicIndexGlobal + 4;
                return (
                  <div key={clinicIndex} className="flex flex-col items-center">
                    <h1
                      className="text-md lg:text-[30px] font-bold mb-2 border-b-2 border-black"
                      style={{ fontFamily: "RDR" }}
                    >
                      {clinic.name}
                    </h1>
                    {clinic.members.map((name, i) => {
                      const key = `${clinicIndex}-${i}`;
                      const isBold = boldMap[key];
                      return (
                        <h2
                          key={i}
                          className={`text-sm lg:text-[23px] tracking-wide border-b-2 border-transparent hover:border-black transition-all duration-300 cursor-default ${
                            isBold ? "font-bold" : ""
                          }`}
                          style={isBold ? { fontFamily: "RDR" } : {}}
                        >
                          {name}
                        </h2>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      {/* Mobile layout (3-3-1) */}
      <div className="flex flex-col space-y-12 lg:hidden">
        {[0, 1, 2].map((rowIndex) => {
          const start = rowIndex * 3;
          const end = rowIndex === 2 ? clinics.length : start + 3;
          return (
            <div
              key={rowIndex}
              className="flex items-start justify-center gap-5 px-10"
            >
              {clinics.slice(start, end).map((clinic, clinicIndexGlobal) => {
                const clinicIndex = start + clinicIndexGlobal;
                return (
                  <div key={clinicIndex} className="flex flex-col items-center">
                    <h1
                      className="text-[10px] font-bold mb-2 border-b-2 border-black"
                      style={{ fontFamily: "RDR" }}
                    >
                      {clinic.name}
                    </h1>
                    {clinic.members.map((name, i) => {
                      const key = `${clinicIndex}-${i}`;
                      const isBold = boldMap[key];
                      return (
                        <h2
                          key={i}
                          className={`text-[9px] tracking-wide border-b-2 border-transparent hover:border-black transition-all duration-300 cursor-default ${
                            isBold ? "font-bold" : ""
                          }`}
                          style={isBold ? { fontFamily: "RDR" } : {}}
                        >
                          {name}
                        </h2>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClinicList;
