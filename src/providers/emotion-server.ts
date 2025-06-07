import createEmotionServer from "@emotion/server/create-instance";
import { createEmotionCache } from "./emotion-cache";

const emotionCache = createEmotionCache();
const { extractCriticalToChunks, constructStyleTagsFromChunks } =
  createEmotionServer(emotionCache);

export function extractCriticalToChunksFromHtml(html: string) {
  return extractCriticalToChunks(html);
}

export function constructStyleTags(
  chunks: ReturnType<typeof extractCriticalToChunks>
) {
  return constructStyleTagsFromChunks(chunks);
}
