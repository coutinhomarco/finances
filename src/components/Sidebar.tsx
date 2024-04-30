import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const handleClick = () => {
    console.log('Sign out');
    logout()
    navigate('/')
  }
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-5 font-bold text-lg">Finance Dashboard</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/dashboard" className="block p-4 hover:bg-gray-200">Dashboard</Link></li>
        <li><Link to="/configuration" className="block p-4 hover:bg-gray-200">Configuration</Link></li>
        <li className="mt-auto"><span onClick={handleClick} className="block p-4 hover:bg-gray-200">Sign Out</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
