import React from "react";
import CustomImage from "./CustomImage";
import { useRouter } from "next/navigation";

export type Video = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  url: string;
};

type VideoCardProps = {
  video: Video;
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const router = useRouter();

  const directToYoutube = () => {
    router.push(video.url);
  };

  return (
    <div
      onClick={directToYoutube}
      className="video-card w-full sm:w-[48%] lg:w-[32%] h-[300px] lg:h-[420px] flex flex-col cursor-pointer justify-between border2 rounded-lg p-1.5 lg:p-[1rem] hover:shadow-xl transition-all duration-300"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t">
        <CustomImage
          src={video.thumbnail}
          alt={video.title}
          width={600}
          height={600}
        />
      </div>

      {/* Video Title */}
      <p
        className="truncate-2-lines text-md lg:text-lg text-amber-100 mt-3 mb-2"
        style={{ fontFamily: "RDR" }}
      >
        {video.title}
      </p>

      {/* Watch Now Button and Date */}
      <div className="flex items-center justify-between mt-auto">
        <button className="text-[18px] lg:text-xl hover:text-amber-100 hover:font-bold transition-all cursor-pointer duration-200">
          Watch Video
        </button>
        <p className="text-[12px] lg:text-sm text-amber-100 tracking-wider">
          {new Date(video.published).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
