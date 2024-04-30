import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import {  useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Login from './components/Login';
import NotFound from './components/NotFound';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  const { isAuthenticated } = useAuth();
  return (
      <Router>
        <div className="flex h-screen bg-gray-100">
          {isAuthenticated && <Sidebar />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute><MainContent /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
