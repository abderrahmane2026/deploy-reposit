import React from 'react';
import "./Competitions.css"
import competpic1 from "../../assetes/picturs/competitions/Baseball-rafiki.png"
import competpic2 from "../../assetes/picturs/competitions/Cross country race-bro.png"
import competpic3 from "../../assetes/picturs/competitions/Tennis-amico.png"
export default function Competitions ()  {
// competitionsData.js
const competitions = [
  {
    id: 1,
    name: "Hackathon",
    date: "2024-07-15",
    location: "San Francisco, USA",
    image: competpic1,
    description: "Join us for a 24-hour coding challenge with exciting prizes.",
  },
  {
    id: 2,
    name: "Math Olympiad",
    date: "2024-08-10",
    location: "Tokyo, Japan",
    image: competpic2,
    description: "Compete with the best minds in mathematics from around the world.",
  },
  {
    id: 3,
    name: "Tennis Competition",
    date: "2024-09-25",
    location: "Berlin, Germany",
    image:competpic3,
    description: "Showcase your robotics projects and compete for top honors.",
  },
];



  return (
    <div className="competitions-list">
      {competitions.map(competition => (
        <div key={competition.id} className="competition-card">
          <div className="competition-image">
            <img src={competition.image} alt={competition.name} />
          </div>
          <div className="competition-details">
            <h2>{competition.name}</h2>
            <p><strong>Date:</strong> {competition.date}</p>
            <p><strong>Location:</strong> {competition.location}</p>
            <p>{competition.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


