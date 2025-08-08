export function getIdFromUrl(url) {
  // e.g. "https://swapi.dev/api/starships/9/"
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}
