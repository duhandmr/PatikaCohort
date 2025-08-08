import { useEffect, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");

  // basit debounce
  useEffect(() => {
    const t = setTimeout(() => onSearch(q), 400);
    return () => clearTimeout(t);
  }, [q, onSearch]);

  return (
    <div className="search">
      <label>Name / Model</label>
      <div className="row">
        <input
          placeholder="Name / Model"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button onClick={() => onSearch(q)}>Filter</button>
      </div>
    </div>
  );
}
