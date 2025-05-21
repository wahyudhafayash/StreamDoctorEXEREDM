import React from "react";

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
  return (
    <>
      <a
        href={video.url}
        key={video.id}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-[48%] lg:w-[32%] h-[420px] flex flex-col justify-between border2  rounded-lg  hover:shadow-xl transition-all duration-300"
      >
        {/* Gambar 16:9 */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-t">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Konten judul */}
        <p
          className="truncate-2-lines text-lg text-amber-100 mt-3 mb-2"
          style={{ fontFamily: "RDR" }}
        >
          {video.title}
        </p>

        {/* Bagian bawah: Watch Now + Tanggal */}
        <div className="flex items-center justify-between mt-auto">
          <button className="text-xl hover:text-amber-100 hover:font-bold transition-all cursor-pointer duration-200">
            Watch Now
          </button>
          <p className="text-sm text-amber-100 tracking-wider">
            {new Date(video.published).toLocaleDateString()}
          </p>
        </div>
      </a>
    </>
  );
};

export default VideoCard;
