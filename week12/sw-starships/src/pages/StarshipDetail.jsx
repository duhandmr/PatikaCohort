import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchStarship } from "../api/swapi";

export default function StarshipDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    fetchStarship(id).then((data) => {
      setShip(data.result.properties);
    });
  }, [id]);

  if (!ship) return <p>Loading…</p>;

  return (
    <div className="container detail">
      <button className="back" onClick={() => nav(-1)}>
        ←
      </button>
      <h2>{ship.name}</h2>
      <ul>
        <li>
          <b>Model:</b> {ship.model}
        </li>
        <li>
          <b>Hyperdrive Rating:</b> {ship.hyperdrive_rating}
        </li>
        <li>
          <b>Passengers:</b> {ship.passengers}
        </li>
        <li>
          <b>Max Atmosphering Speed:</b> {ship.max_atmosphering_speed}
        </li>
        <li>
          <b>Manufacturer:</b> {ship.manufacturer}
        </li>
        <li>
          <b>Crew:</b> {ship.crew}
        </li>
        <li>
          <b>Cargo Capacity:</b> {ship.cargo_capacity}
        </li>
      </ul>
    </div>
  );
}
