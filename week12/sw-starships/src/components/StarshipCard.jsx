import { Link } from "react-router-dom";

export default function StarshipCard({ ship }) {
  return (
    <Link to={`/starship/${ship.uid}`} className="card">
      <div className="thumb" />
      <h3>{ship.name}</h3>
    </Link>
  );
}
