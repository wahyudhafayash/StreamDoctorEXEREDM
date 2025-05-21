export type MediaGroup = {
  "media:thumbnail"?: { $: { url: string } }[];
  "media:description"?: string[];
};

export type Entry = {
  "yt:videoId": string[];
  title: string[];
  published: string[];
  updated?: string[];
  "media:group"?: MediaGroup[];
};

export type Feed = {
  entry?: Entry[];
  author?: { name: string[]; uri: string[] }[];
  subtitle?: string[];
};

export type ParsedData = {
  feed: Feed;
};

export type Video = {
  id: string;
  title: string;
  published: string;
  updated?: string;
  description: string;
  thumbnail: string;
  url: string;
};

export type Channel = {
  channelId: string;
  title: string;
  url: string;
  description: string;
  videos: Video[];
};
