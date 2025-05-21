import { parseStringPromise } from "xml2js";

export async function fetchChannelData(channelId: string) {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const res = await fetch(rssUrl);
  if (!res.ok) throw new Error("Channel not found");
  const xml = await res.text();
  const data = await parseStringPromise(xml);

  const entries = data.feed.entry?.slice(0, 3) || [];

  const videos = entries.map((entry: any) => {
    const id = entry["yt:videoId"][0];
    return {
      id,
      title: entry.title[0],
      published: entry.published[0],
      updated: entry.updated?.[0],
      description: entry["media:group"]?.[0]?.["media:description"]?.[0] || "",
      thumbnail:
        entry["media:group"]?.[0]?.["media:thumbnail"]?.[0]?.$.url ||
        `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      url: `https://www.youtube.com/watch?v=${id}`,
    };
  });

  return {
    channelId,
    title: data.feed.author[0].name[0],
    url: data.feed.author[0].uri[0],
    description: data.feed.subtitle?.[0] || "",
    videos,
  };
}
