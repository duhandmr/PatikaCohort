import ReviewsHeader from "./ReviewsHeader";
import ReviewsList from "./ReviewsList";

function Reviews() {
  return (
    <section id="review">
      <div className="container">
        <ReviewsHeader />
        <ReviewsList />
      </div>
    </section>
  );
}
export default Reviews;
