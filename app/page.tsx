import React from "react";
import HeroSection from "./_components/HeroSection";
import ClinicList from "./_components/ClinicList";
import ChannelList from "./_components/ChannelList";

const Home = () => {
  return (
    <div
      className="bg-center min-h-screen w-full px-0 lg:px-28 pb-20"
      style={{ backgroundImage: "url('/BGHERO.webp')" }}
    >
      <HeroSection />
      <ClinicList />
      <ChannelList />
    </div>
  );
};

export default Home;
