import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import NavigationMenu from './NavigationMenu'; // Giả định mày đã có file này

const App = () => {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <Routes>
          {/* Gọi hàm để render tự động tất cả các route */}
          {renderRoutes()}
        </Routes>
      </div>
    </Router>
  );
};

export default App;