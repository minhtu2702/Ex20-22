import React from 'react';
import { Link } from 'react-router-dom';
import { dishes} from '../datas/data';

const DishList = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
      {dishes.map((dish) => (
        <div key={dish.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
          <img src={dish.image} alt={dish.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <h3>
            <Link to={`/dishes/${dish.id}`}>{dish.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DishList;