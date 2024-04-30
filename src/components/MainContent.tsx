import React from 'react';
import Transactions from './Transactions';

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-10">
      <h1 className="font-bold text-xl mb-5">Dashboard for Personal Finances Control</h1>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold mb-3">Income vs. Expenses</h2>
          <div className="h-40 bg-gray-300"></div>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold mb-3">Monthly Spending</h2>
          <div className="h-40 bg-gray-300"></div>
        </div>
      </div>
      <Transactions />
    </div>
  );
};

export default MainContent;
