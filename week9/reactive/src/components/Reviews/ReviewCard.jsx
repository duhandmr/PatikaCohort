function ReviewCard({ img, name, title, desc }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={img} alt={title} className="review-avatar" />
        <div>
          <div className="review-name">{name}</div>
          <div className="review-title">{title}</div>
        </div>
      </div>
      <div className="review-box">{desc}</div>
    </div>
  );
}
export default ReviewCard;
