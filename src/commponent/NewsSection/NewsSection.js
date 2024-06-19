import React from 'react';
import './NewsSection.css'; // Assuming you'll create a News.css file for styling
import newsImg from '../../assetes/picturs/News.png'; 
import { Link } from 'react-router-dom'
export default function NewsSection() {
    return (
        <div className="news-section">
            <div className="news-description">
                <h1>
                    Latest News and <span>Updates!</span>
                </h1>
                <p>Stay updated with the latest news and updates from our platform.</p>
                <Link to="/News"> <button>Last News </button></Link>
            </div>
            <div className="news-img">
                <img src={newsImg} alt="" />
            </div>
        </div>
    );
}
