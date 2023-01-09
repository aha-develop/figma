export const ensureEmbedFlags = (url) => {
  if (!url) return

  // From https://www.figma.com/developers/embed
  if (!url.match(/https:\/\/([\w\.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/)) return

  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`
}