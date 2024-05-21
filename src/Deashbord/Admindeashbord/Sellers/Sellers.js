import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import './Sellers.css'; // Import your CSS file

const Sellers = () => {

  const mockSellers = [
    { id: 1, name: 'Seller 1', email: 'seller1@example.com' },
    { id: 2, name: 'Seller 2', email: 'seller2@example.com' },
    { id: 3, name: 'Seller 3', email: 'seller3@example.com' },
  ];

    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        // Fetch sellers data from the database
        axios.get('/api/sellers')
            .then(response => {
                setSellers(response.data);
            })
            .catch(error => {
                console.error('Error fetching sellers:', error);
            });
    }, []);

    const handleDeleteSeller = (id) => {
        // Implement the delete logic here
        // For example:
        // axios.delete(`/api/sellers/${id}`)
        //     .then(response => {
        //         // Update the sellers state after deletion
        //         setSellers(prevSellers => prevSellers.filter(seller => seller.id !== id));
        //     })
        //     .catch(error => {
        //         console.error('Error deleting seller:', error);
        //     });
    };

    const handleEditSeller = (id) => {
        // Implement the edit logic here
    };

    return (
        <div className="sellers-container">
            <h2>Sellers</h2>
            <table className="sellers-table">
                <thead>
                    <tr>
                        <th>Seller ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mockSellers.map(mockSellers => (
                        <tr key={mockSellers.id}>
                            <td>{mockSellers.id}</td>
                            <td>{mockSellers.name}</td>
                            <td>{mockSellers.email}</td>
                            <td>
                                <button onClick={() => handleEditSeller(mockSellers.id)}>Edit</button>
                                <button onClick={() => handleDeleteSeller(mockSellers.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Sellers;
