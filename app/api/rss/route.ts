import { NextRequest, NextResponse } from "next/server";
import { fetchChannelData } from "@/lib/parseRess";

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
];

export async function POST(req: NextRequest) {
  try {
    const results = await Promise.allSettled(
      CHANNEL_IDS.map((id) => fetchChannelData(id))
    );
    const channels = results
      .filter((res) => res.status === "fulfilled")
      .map((res: any) => res.value);

    return NextResponse.json(channels);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
