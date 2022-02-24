export const ensureEmbedFlags = (url) => {
  if (url.includes('figma.com/embed')) {
    return url
  } else {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`
  }
}