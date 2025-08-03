import ReviewCard from "./ReviewCard";

import client1 from "../../assets/img/client1.jpg";
import client2 from "../../assets/img/client2.jpg";

const reviews = [
  {
    img: client1,
    name: "Diet Expert",
    title: "CFO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi quia, libero voluptatibus ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.",
  },
  {
    img: client2,
    name: "Cardio Trainer",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi quia, libero voluptatibus ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.",
  },
];

function ReviewsList() {
  return (
    <div className="reviews-list">
      {reviews.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </div>
  );
}
export default ReviewsList;
