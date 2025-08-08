export default function LoadMore({ hasMore, onClick, loading }) {
  if (!hasMore) return null;
  return (
    <div className="loadmore">
      <button disabled={loading} onClick={onClick}>
        {loading ? "Loading..." : "Daha Fazla"}
      </button>
    </div>
  );
}
