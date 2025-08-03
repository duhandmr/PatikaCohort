function TrainerCard({ img, name, role }) {
  return (
    <div className="trainer-card">
      <span className="bar left"></span>
      <span className="bar right"></span>
      <span className="bar top"></span>
      <span className="bar bottom"></span>
      <img src={img} alt={name} />
      <div className="trainer-info-pop">
        <div className="trainer-name">{name}</div>
        <div className="trainer-role">{role}</div>
      </div>
    </div>
  );
}
export default TrainerCard;
