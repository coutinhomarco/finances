import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App: React.FC = () => {
  return (
          <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Adicione mais rotas aqui conforme você cria outras páginas */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
