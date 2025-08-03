const leftTabs = [
  { key: "yoga", label: "Yoga" },
  { key: "group", label: "Group" },
];
const rightTabs = [
  { key: "solo", label: "Solo" },
  { key: "stretching", label: "Stretching" },
];

function ClassesTabs({ activeTab, setActiveTab }) {
  return (
    <div className="class-tabs">
      <div className="class-tabs_left">
        {leftTabs.map((tab) => (
          <button
            key={tab.key}
            data-tab={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="class-tabs_right">
        {rightTabs.map((tab) => (
          <button
            key={tab.key}
            data-tab={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
export default ClassesTabs;
