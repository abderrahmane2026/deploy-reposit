import React from 'react';
import "./Events.css"
import competpic1 from "../../assetes/picturs/competitions/Baseball-rafiki.png"
import competpic2 from "../../assetes/picturs/competitions/Cross country race-bro.png"
import competpic3 from "../../assetes/picturs/competitions/Tennis-amico.png"
const events = [
  {
    id: 1,
    name: "Music Concert",
    date: "2024-07-01",
    location: "New York, USA",
    image: competpic1,
    description: "Join us for an amazing night of live music featuring top artists.",
  },
  {
    id: 2,
    name: "Art Exhibition",
    date: "2024-08-15",
    location: "Paris, France",
    image: competpic2,
        description: "Experience the latest in contemporary art from around the world.",
  },
  {
    id: 3,
    name: "Tech Conference",
    date: "2024-09-20",
    location: "San Francisco, USA",
    image: competpic3,
     description: "Explore the future of technology with industry leaders and innovators.",
  },
];

export default function Events ()  {

  return (
    <div className="events-list">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <div className="event-image">
            <img src={event.image} alt={event.name} />
          </div>
          <div className="event-details">
            <h2>{event.name}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


