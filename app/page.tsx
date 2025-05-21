import React from "react";
import HeroSection from "./_components/HeroSection";
import ClinicList from "./_components/ClinicList";
import ChannelList from "./_components/ChannelList";

const Home = () => {
  return (
    <section
      className="bg-center min-h-screen w-full px-28 pb-20"
      style={{ backgroundImage: "url('/BGHERO.webp')" }}
    >
      <HeroSection />
      <ClinicList />
      <ChannelList />
    </section>
  );
};

export default Home;
