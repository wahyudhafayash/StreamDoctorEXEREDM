import { fetchChannelData } from "@/lib/parseRess";
import { NextResponse } from "next/server";

type Video = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  url: string;
};

type Channel = {
  channelId: string;
  title: string;
  url: string;
  description: string;
  videos: Video[];
};

type ChannelMeta = {
  id: string;
  author: string;
};

const rawEnv = process.env.YOUTUBE_CHANNELS || "[]";

let CHANNELS: ChannelMeta[] = [];
try {
  CHANNELS = JSON.parse(rawEnv);
} catch (e) {
  console.error("Failed to parse YOUTUBE_CHANNELS from .env:", e);
}

export async function POST() {
  try {
    const results = await Promise.allSettled(
      CHANNELS.map((channel) => fetchChannelData(channel.id))
    );

    const channels = results
      .map((res, index) => {
        if (res.status === "fulfilled") {
          const channelData = res.value as Channel;
          return {
            ...channelData,
            _author: CHANNELS[index].author,
          };
        }
        return null;
      })
      .filter(
        (channel): channel is Channel & { _author: string } => channel !== null
      );

    return NextResponse.json(channels);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
