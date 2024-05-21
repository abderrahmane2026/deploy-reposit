// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using axios for HTTP requests
// import './Users.css'; // Import your CSS file
// import Cookie from 'cookie-universal'

// const Users = () => {
//     const cookie = Cookie();
//     const token = cookie.get("e-commerce");

//     const [users, setUsers] = useState([]);

//     useEffect(() => {
        
//         axios.get('/api/users',{
//      headers:{
//         Authorization:"bearer" = token,
//      },
//     })
//       .then((data) =>setUsers(data.data))
//       .catch((err) =>console.error('Error fetching users:', err));
//             });

// const usersShow = users.map((user,key)=><tr key={key}>
//   <td>{user.id}</td>
//   <td>{user.name}</td>
//   <td>{user.email}</td>
//  <td>{user.role}</td>
// </tr>)


//     return (
//         <div className="users-container">
//             <h2>Users</h2>
//             <table className="users-table">
//                 <thead>
//                     <tr>
//                         <th>User ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* {usersShow} */}
//                     {users.map(user => (
//                         <tr key={user.id}>
//             ;                <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.role}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Users;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import './Users.css'; // Import your CSS file

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="users-container">
            <h2>Users</h2>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name.firstname} {user.name.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
