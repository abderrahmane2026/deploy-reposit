import React from 'react';

import { Link } from 'react-router-dom';
import './Athletes.css';

import athlete1 from "../../assetes/picturs/Athletes/Athletes3.jpg"
import athlete2 from "../../assetes/picturs/Athletes/Athletes4.jpg"
import athlete3 from "../../assetes/picturs/Athletes/Athletes5.jpg"
import athlete4 from "../../assetes/picturs/Athletes/Athletes1.jpg"
import athlete5 from "../../assetes/picturs/Athletes/Athletes2.jpg"

const athletes = [
  {
    id: 1,
    name: "Usain Bolt",
    sport: "Track and Field",
    country: "Jamaica",
    image: athlete1,
    achievements: "Olympic Gold Medalist",
  },
  {
    id: 1,
    name: "Usain Bolt",
    sport: "Track and Field",
    country: "Jamaica",
    image: athlete2,
    achievements: "Olympic Gold Medalist",
  },
  {
    id: 1,
    name: "Usain Bolt",
    sport: "Track and Field",
    country: "Jamaica",
    image: athlete3,
    achievements: "Olympic Gold Medalist",
  },
  {
    id: 2,
    name: "Michael Phelps",
    sport: "Swimming",
    country: "USA",
    image: athlete4,
    achievements: "Most Olympic Medals",
  },
  {
    id: 3,
    name: "Serena Williams",
    sport: "Tennis",
    country: "USA",
    image: athlete5,
    achievements: "Grand Slam Titles",
  },
  // Add more athletes as needed
];

export default function Athletes ()  {


  return (
    <div className="athletes-list">
      <h1>Athletes</h1>
      <div className="athletes-grid">
        {athletes.map(athlete => (
          <div key={athlete.id} className="athlete-card">
            <img src={athlete.image} alt={athlete.name} />
            <h3>{athlete.name}</h3>
            <p>{athlete.sport}</p>

          <button>  <Link to={`/athlete/${athlete.id}`}>View Details</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};


