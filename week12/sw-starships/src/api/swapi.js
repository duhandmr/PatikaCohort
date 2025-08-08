const BASE = "https://www.swapi.tech/api";

export async function fetchStarships({ page = 1, search = "" } = {}) {
  let url = `${BASE}/starships?page=${page}&limit=10`;
  if (search) {
    // swapi.tech arama da destekliyor: ?name=
    url = `${BASE}/starships/?name=${encodeURIComponent(search)}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch starships");
  return res.json(); // {results, next, previous, total_pages ...}
}

export async function fetchStarship(id) {
  const res = await fetch(`${BASE}/starships/${id}`);
  if (!res.ok) throw new Error("Starship not found");
  return res.json(); // { result: { properties: {...} } }
}
