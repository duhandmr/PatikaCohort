function ClassesContentCard({ heading, desc, subheading, times, img, key }) {
  return (
    <div className="class-content active" data-content={key}>
      <div className="class-info">
        <h3>{heading}</h3>
        <p>{desc}</p>
        <h3>{subheading}</h3>
        <ul>
          {times.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="class-image">
        <img src={img} alt={heading} />
      </div>
    </div>
  );
}
export default ClassesContentCard;
