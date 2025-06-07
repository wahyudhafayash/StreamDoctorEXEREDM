"use client";

import React, { useState, useEffect } from "react";

const clinics = [
  {
    name: "Klinik St Denis",
    members: [
      "Aithne Eirdis",
      "Enzy Emily",
      "Josie Mikaelson",
      "Berlin de Amber",
      "Ri Hannah",
      "Vivienne Pearl",
      "Jaffar Rawdrick",
      "Jia Jessyln",
      "Roseanna d’Or Picotte",
      "Sophia S Libra",
    ],
  },
  {
    name: "Kantor Sheriff Rhodes",
    members: [
      "Xue Pai Lai",

      "Elias Van Der Meer",
      "Dogler De",

      "Cresentia Frances",
      "Paida Blinders",
      "Hilton Forsaken",
      "Jeff Kubo",
      "Joey Wales",
    ],
  },
  {
    name: "Klinik Valentine",
    members: ["James Floch", "Valerie Giorga", "Kanaka Kendall"],
  },
  {
    name: "Kantor Pos Emerald Ranch",
    members: [
      "Dara Malia",
      "Clayton Ridge",
      "Willow Sugar El’Jonson",
      "Charles Locke",
      "Lily Rose",
      "Luca Ellio",
      "Levin Oscar Abdullah",
      "Zhao Feng",
      "James Noah",
      "Zion Moore",
    ],
  },
  {
    name: "Klinik Blackwater",
    members: [
      "Marshall River",
      "Ace Mulyono",
      "Jacques Arnaud",
      "Daniil Clerk",
      "Henry Montgomery",
      "Siti Jubaedah",
      "Wat Tyler",
      "Andrea La Roche",
      "Tessa Everdeen",
    ],
  },
  {
    name: "Klinik Strawberry",
    members: [
      "Max Von Edinburgh",
      "Cody McNeil",
      "Halyn Denali",
      "Floyd Dalton",
      "Theresa Xiu",
      "Dantes Burner",
      "Lila Grace",
      "Luis Acapello",
      "Nelson Andersen",
      "Chloé Antoinette",
    ],
  },
  {
    name: "Wapiti",
    members: ["Malika", "Charlotte Antoinette", "-"],
  },
  {
    name: "Shaman Wapiti",
    members: ["Enolla"],
  },
  {
    name: "Armadillo",
    members: [],
  },
  {
    name: "Van Horn",
    members: ["Ale De Jong"],
  },
];

const ClinicList = () => {
  const [boldMap, setBoldMap] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const newMap: { [key: string]: boolean } = {};
    clinics.forEach((clinic, clinicIndex) => {
      clinic.members.forEach((_, memberIndex) => {
        const key = `${clinicIndex}-${memberIndex}`;
        newMap[key] = Math.random() < 0.5;
      });
    });
    setBoldMap(newMap);
  }, []);

  return (
    <div
      className="flex flex-wrap justify-center gap-10 px-4 py-10 text-transparent bg-clip-text bg-[url('/BGText.webp')]"
      style={{ fontFamily: "RDR" }}
    >
      {clinics.map((clinic, clinicIndex) => (
        <div
          key={clinicIndex}
          className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 border-b-2 border-black">
            {clinic.name}
          </h1>
          {clinic.members.map((name, i) => {
            const key = `${clinicIndex}-${i}`;
            const isBold = boldMap[key];
            return (
              <h2
                key={i}
                className={`text-sm md:text-base lg:text-lg tracking-wide border-b-2 border-transparent hover:border-black transition-all duration-300 cursor-default ${
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
  );
};

export default ClinicList;
