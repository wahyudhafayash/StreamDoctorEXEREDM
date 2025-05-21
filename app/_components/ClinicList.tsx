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
    members: ["", "", "", "", ""],
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
    members: ["Max Von Edinburgh", "Cody McNeil", "Hayln Denali", "", ""],
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
      clinic.members.forEach((name, memberIndex) => {
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
      {[0, 1].map((rowIndex) => (
        <div key={rowIndex} className="flex items-start gap-40">
          {clinics
            .slice(rowIndex * 4, rowIndex === 0 ? 4 : 7)
            .map((clinic, clinicIndex) => (
              <div key={clinicIndex} className="flex flex-col items-center">
                <h1
                  className="text-[30px] font-bold mb-2 border-b-2 border-black"
                  style={{ fontFamily: "RDR" }}
                >
                  {clinic.name}
                </h1>
                {clinic.members.map((name, i) => {
                  const key = `${rowIndex * 4 + clinicIndex}-${i}`;
                  const isBold = boldMap[key];
                  return (
                    <h2
                      key={i}
                      className={`text-[23px] tracking-wide border-b-2 border-transparent hover:border-black transition-all duration-300 cursor-default ${
                        isBold ? "font-bold" : ""
                      }`}
                      style={isBold ? { fontFamily: "RDR" } : {}}
                    >
                      {name}
                    </h2>
                  );
                })}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ClinicList;
