import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reports.css"; // Add appropriate styling

export default function Reports() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("https://futterclubs-1.onrender.com/api/contact/");
        setMessages(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="reports-container">
      <h2>Contact Us Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="messages-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td>{new Date(message.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
