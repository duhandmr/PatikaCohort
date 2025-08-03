function StatBox({ value, label }) {
  return (
    <div className="stat">
      <p>{value}</p>
      <span>{label}</span>
    </div>
  );
}
export default StatBox;
