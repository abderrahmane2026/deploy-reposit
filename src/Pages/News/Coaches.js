import React from 'react';
import './Coaches.css';

const coaches = [
  {
    name: 'John Smith',
    sport: 'Basketball',
    experience: '15 years',
    bio: 'John has led teams to numerous championships and is known for his strategic mindset and player development skills.',
    image: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg'
  },
  {
    name: 'Sarah Johnson',
    sport: 'Soccer',
    experience: '10 years',
    bio: 'Sarah has a strong background in coaching youth soccer teams and focuses on technical skills and teamwork.',
    image: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg'
  },
  {
    name: 'Mike Davis',
    sport: 'Tennis',
    experience: '20 years',
    bio: 'Mike has coached at the collegiate level and specializes in developing competitive players with strong mental fortitude.',
    image: 'https://randomuser.me/api/portraits/med/men/75.jpg'
  },
  {
    name: 'Emma Wilson',
    sport: 'Swimming',
    experience: '12 years',
    bio: 'Emma is a former Olympic swimmer and has transitioned into coaching, focusing on technique and endurance training.',
    image: 'https://randomuser.me/api/portraits/women/79.jpg'
  }
];

export default function Coaches() {
  return (
    <div className='CoachesPage'>

  
    <div className="container">
      <h1 className="header">Our <span>Coaches</span></h1>
      <div className="coaches-container">
        {coaches.map((coach, index) => (
          <div key={index} className="card">
            <img src={coach.image} alt={coach.name} className="image" />
            <h1 className="name">{coach.name}</h1>
            <p><strong>Sport:</strong> {coach.sport}</p>
            <p><strong>Experience:</strong> {coach.experience}</p>
            <p>{coach.bio}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
