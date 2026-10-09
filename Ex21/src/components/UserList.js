import React from 'react';
import { Link } from 'react-router-dom';

// Dữ liệu danh sách người dùng
export const users = [
  { firstName: "John", lastName: "Done", age: 25 },
  { firstName: "Mary", lastName: "Thompson", age: 35 },
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Emily", lastName: "Johnson", age: 25 },
  { firstName: "William", lastName: "Davis", age: 34 }
];

const UserList = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <Link to={`/users/${index}`} style={{ fontSize: '20px', textDecoration: 'underline' }}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;