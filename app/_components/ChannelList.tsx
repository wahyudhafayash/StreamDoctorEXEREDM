"use client";
import React, { useEffect, useState } from "react";
import VideoCard, { Video } from "./VideoCard";

type Channel = {
  channelId: string;
  title: string;
  url: string;
  description: string;
  videos: Video[];
};

const ChannelList = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1495);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchChannels = async () => {
      const res = await fetch("/api/rss", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        console.error("Gagal memuat channel");
        return;
      }

      const data: Channel[] = await res.json();
      const sorted = data.sort((a, b) => {
        const aTime = new Date(a.videos?.[0]?.published || 0).getTime();
        const bTime = new Date(b.videos?.[0]?.published || 0).getTime();
        return bTime - aTime;
      });

      setChannels(sorted);
    };

    fetchChannels();
  }, []);

  return (
    <section
      className="text-transparent bg-clip-text bg-[url('/BGText.webp')] mx-5 md:mx-10 lg:mx-0"
      style={{ fontFamily: "RDR" }}
    >
      <div className="flex justify-between items-center pt-12">
        <h1
          className="text-2xl md:text-4xl lg:text-[50px] font-bold tracking-wider"
          style={{ fontFamily: "RDR" }}
        >
          CHANNELS
        </h1>
        <h1 className="text-[2-px] md:text-2xl lg:text-4xl font-bold tracking-wider">
          Newest Videos
        </h1>
      </div>

      <div className="mt-10 border1 bg-black/20">
        {channels.map((ch) => (
          <div key={ch.channelId} className="flex flex-col mt-5 lg:mt-10">
            <div className="flex items-center justify-between">
              <a
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl lg:text-4xl font-bold tracking-wide"
                style={{ fontFamily: "RDR" }}
              >
                {ch.title}
              </a>
              <a
                href={ch.url}
                className="text-[12px] md:text-[16px] lg:text-2xl hover:text-3xl text-amber-100"
                style={{ fontFamily: "RDR" }}
              >
                View Channel
              </a>
            </div>
            <p className="mb-4 text-sm text-gray-600">{ch.description}</p>

            <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
              {(isMobile ? ch.videos.slice(0, 2) : ch.videos).map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChannelList;
