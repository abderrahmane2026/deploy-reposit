import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sellers.css";

const Sellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => {
        const sellers = response.data.filter((user) => user.role === "seller");
        setSellers(sellers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAccept = async (userId) => {
    if (window.confirm("Are you sure you want to accept this seller?")) {
      try {
        await axios.put(`/api/user/${userId}/accept`);
        setSellers(
          sellers.map((seller) =>
            seller._id === userId
              ? { ...seller, sellerStatus: "accepted" }
              : seller
          )
        );
      } catch (error) {
        console.error("Error accepting seller:", error);
      }
    }
  };

  const handleRefuse = async (userId) => {
    if (window.confirm("Are you sure you want to refuse this seller?")) {
      try {
        await axios.put(`/api/user/${userId}/refuse`);
        setSellers(
          sellers.map((seller) =>
            seller._id === userId
              ? { ...seller, sellerStatus: "refused" }
              : seller
          )
        );
      } catch (error) {
        console.error("Error refusing seller:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="users-container">
      <h2>Sellers</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller._id}>
              <td>{seller._id}</td>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>{seller.role}</td>
              <td>{seller.sellerStatus}</td>
              <td>
                {seller.sellerStatus === "requested" && (
                  <>
                    <button
                      className="accept-button"
                      onClick={() => handleAccept(seller._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="refuse-button"
                      onClick={() => handleRefuse(seller._id)}
                    >
                      Refuse
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sellers;
