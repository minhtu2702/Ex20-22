import React from 'react';
import { useParams } from 'react-router-dom';
import { dishes} from '../datas/data';

const DishDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return <h2>Dish not found!</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>{dish.name}</h2>
      <img src={`/${dish.image}`} alt={dish.name} style={{ width: '100%' }} />
      <p><strong>Category:</strong> {dish.category}</p>
      <p><strong>Price:</strong> ${dish.price}</p>
      <p>{dish.description}</p>
    </div>
  );
};

export default DishDetail;