import bmiIndex from "../../assets/img/bmi-index.jpg";

function BMIImage({ bmi }) {
  // Basit gösterim. İstersen oku/bmi sonucuna göre konumlandırabilirsin.
  return (
    <div className="bmi-right">
      <div className="bmi-right-label">Your BMI</div>
      <div className="bmi-image-wrapper" style={{ position: "relative" }}>
        <img src={bmiIndex} alt="BMI" id="bmi-index-img" />
        {/* Gerçek projede bmi aralığına göre oku konumlandırabilirsin */}
        {bmi && (
          <div
            id="bmi-arrow"
            style={{
              display: "block",
              position: "absolute",
              left: `${Math.min(
                100,
                Math.max(0, ((bmi - 16) * 100) / (40 - 16))
              )}%`,
              bottom: "-18px",
              width: 0,
              height: 0,
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderTop: "20px solid orange",
              transform: "translateX(-50%) rotate(180deg)",
              zIndex: 2,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
export default BMIImage;
