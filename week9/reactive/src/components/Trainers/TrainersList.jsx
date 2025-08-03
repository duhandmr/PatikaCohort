import TrainerCard from "./TrainerCard";

import trainer1 from "../../assets/img/trainer1.jpg";
import trainer2 from "../../assets/img/trainer2.jpg";
import trainer3 from "../../assets/img/trainer3.jpg";

const trainers = [
  {
    img: trainer1,
    name: "Jane Doe",
    role: "Cardio Trainer",
  },
  {
    img: trainer2,
    name: "John Smith",
    role: "Yoga Instructor",
  },
  {
    img: trainer3,
    name: "Emily Lee",
    role: "Strength Coach",
  },
];

function TrainersList() {
  return (
    <div className="trainers-list">
      {trainers.map((t, i) => (
        <TrainerCard key={i} {...t} />
      ))}
    </div>
  );
}
export default TrainersList;
