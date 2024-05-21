import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = ({ isLoggedIn, userName }) => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [response, setResponse] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoggedIn) {
            setResponse('Please log in to send a message.');
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Redirect after 2 seconds
            return;
        }

        try {
            const res = await axios.post('/api/contact', {
                userName,
                email,
                subject,
                message
            });
            setResponse('Message sent successfully!');
        } catch (err) {
            setResponse('Failed to send the message.');
        }
    };

    return (
        <div className="contact-us-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn-submit">Send</button>
            </form>
            {response && <p className="response-message">{response}</p>}
        </div>
    );
};

export default Contact;
