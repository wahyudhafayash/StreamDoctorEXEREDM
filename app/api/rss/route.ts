import { fetchChannelData } from "@/lib/parseRess";
import { NextResponse } from "next/server";

// Channel IDs
const CHANNEL_IDS = [
  "UCHU_kevGAQMf3WQRYggq8Pw",
  "UCgCZoqXuSsNfWqAiazxSHtQ",
  "UCo2_aQJNINkysdgn10qvT8w",
  "UCfX2myyFOyFooFkzT4JnhWw",
  "UCWu5WvlHmbAu1LqdZGmlq9w",
  "UCMZgonFYA2tdwSWP-G5SQVw",
  "UC1LS0oiuuSGkBlSiGVnA3wg",
  "UCkmXYtBjhilwv8P2jZPfHMQ",
  "UCBVNmRX2wOiiq2Pip_jT8CA",
  "UCMKcqFslBFm7i8CXkMab2hQ",
  "UCwn9VkmZ57G7WoNaOJt3yoA",
  "UC04yaXbxeiG_sN47idcdimg",
  "UC5s6bkQaV_kkZvZdWIkUh1A",
  "UCQT32lB_EhrNoqkRPZvl-5A",
  "UCJd8bGU7fpkBkVVSE2Wly7A",
];

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

export async function POST() {
  try {
    const results = await Promise.allSettled(
      CHANNEL_IDS.map((id) => fetchChannelData(id))
    );

    // Properly type res.value as Channel
    const channels = results
      .filter((res) => res.status === "fulfilled")
      .map((res) => res.value as Channel);

    return NextResponse.json(channels);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
