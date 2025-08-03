import BMIForm from "./BMIForm";
import BMIImage from "./BMIImage";
import { useState } from "react";
import BMIDescription from "./BmiDescription";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  function handleBmiCalculate(e) {
    e.preventDefault();
    if (!height || !weight) return;
    const bmiVal = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiVal);
  }

  return (
    <section id="bmi" className="container">
      <div className="bmi-left">
        <BMIDescription />
        <BMIForm
          height={height}
          weight={weight}
          setHeight={setHeight}
          setWeight={setWeight}
          onSubmit={handleBmiCalculate}
        />
        {bmi && (
          <div className="bmi-result">
            Your BMI: <b>{bmi}</b>
          </div>
        )}
      </div>
      <BMIImage bmi={bmi} />
    </section>
  );
}
export default BMI;
