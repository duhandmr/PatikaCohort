function BMIForm({ height, weight, setHeight, setWeight, onSubmit }) {
  return (
    <form className="bmi-form" onSubmit={onSubmit}>
      <div>
        <input
          type="number"
          placeholder="Your Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <span>cm</span>
      </div>
      <div>
        <input
          type="number"
          placeholder="Your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <span>kg</span>
      </div>
      <button type="submit" style={{ display: "none" }}>
        Hesapla
      </button>
    </form>
  );
}
export default BMIForm;
