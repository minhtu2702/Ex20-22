import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import DishList from './components/DishList';
import DishDetail from './components/DishDetail';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff', display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Users</Link>
        <Link to="/dishes" style={{ color: '#fff', textDecoration: 'none' }}>Dishes</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Routes cho phần Users */}
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />

          {/* Routes cho phần Dishes */}
          <Route path="/dishes" element={<DishList />} />
          <Route path="/dishes/:id" element={<DishDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;