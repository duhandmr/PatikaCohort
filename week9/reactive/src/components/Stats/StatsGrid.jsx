import StatBox from "./StatBox";

const statsData = [
  { value: 325, label: "Course" },
  { value: 405, label: "Work Out" },
  { value: 305, label: "Working Hour" },
  { value: 705, label: "Happy Client" },
];

function StatsGrid() {
  return (
    <div className="stats-grid container">
      {statsData.map((stat, i) => (
        <StatBox key={i} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
export default StatsGrid;
