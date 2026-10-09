import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../datas/data';

const UserDetail = () => {
  const { id } = useParams();
  const user = users[id];

  if (!user) {
    return <h2>User not found!</h2>;
  }

  return (
    <div>
      <h2>{user.firstName} {user.lastName} : {user.age}</h2>
    </div>
  );
};

export default UserDetail;