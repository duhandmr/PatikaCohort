import TrainersHeader from "./TrainersHeader.jsx";
import TrainersList from "./TrainersList";

function Trainers() {
  return (
    <section id="trainers">
      <div className="container">
        <TrainersHeader />
        <TrainersList />
      </div>
    </section>
  );
}
export default Trainers;
