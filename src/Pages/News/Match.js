import React from 'react';


export default function Matches ()  {
  const competitions = [
    {
      id: 2,
      name: "Math Olympiad",
      date: "2024-08-10",
      location: "Tokyo, Japan",
      description: "Compete with the best minds in mathematics from around the world.",
    },
    {
      id: 1,
      name: "Hackathon",
      date: "2024-07-15",
      location: "San Francisco, USA",
      description: "Join us for a 24-hour coding challenge with exciting prizes.",
    },
    {
      id: 2,
      name: "Math Olympiad",
      date: "2024-08-10",
      location: "Tokyo, Japan",
      description: "Compete with the best minds in mathematics from around the world.",
    },
    {
      id: 2,
      name: "Math Olympiad",
      date: "2024-08-10",
      location: "Tokyo, Japan",
      description: "Compete with the best minds in mathematics from around the world.",
    },

    {
      id: 3,
      name: "Tennis Competition",
      date: "2024-09-25",
      location: "Berlin, Germany",
      description: "Showcase your robotics projects and compete for top honors.",
    },
  ];
  return (
    <div className="competitions-list">
      {competitions.map(competition => (
        <div key={competition.id} className="competition-card">
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


