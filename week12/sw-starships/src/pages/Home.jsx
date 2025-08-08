import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchStarships } from "../api/swapi";
import SearchBar from "../components/SearchBar";
import StarshipCard from "../components/StarshipCard";
import LoadMore from "../components/LoadMore";

export default function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [ships, setShips] = useState([]);
  const [next, setNext] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetAndSearch = useCallback((q) => {
    setQuery(q);
    setPage(1);
    setShips([]);
  }, []);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError("");
    fetchStarships({ page, search: query })
      .then((data) => {
        if (ignore) return;
        setShips((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setNext(data.next);
      })
      .catch((e) => !ignore && setError(e.message))
      .finally(() => !ignore && setLoading(false));
    return () => (ignore = true);
  }, [page, query]);

  const hasMore = useMemo(() => Boolean(next), [next]);

  return (
    <div className="container">
      <h1>STAR WARS</h1>
      <SearchBar onSearch={resetAndSearch} />
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {ships.map((s) => (
          <StarshipCard key={s.url} ship={s} />
        ))}
      </div>

      <LoadMore
        hasMore={hasMore}
        loading={loading}
        onClick={() => setPage((p) => p + 1)}
      />
    </div>
  );
}
