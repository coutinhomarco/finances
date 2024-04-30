import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import Transactions from './Transactions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data for Income vs. Expenses
const incomeVsExpensesData = {
  labels: ['Income', 'Expenses'],
  datasets: [
    {
      label: 'Amount',
      data: [3000, -1500],
      backgroundColor: ['#4CAF50', '#F44336']
    }
  ]
};

// Sample data for Monthly Spending
const monthlySpendingData = {
  labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
  datasets: [
    {
      label: 'Spending',
      data: [1200, 300, 150, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED']
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart'
    },
  },
};

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-10">
      <h1 className="font-bold text-xl mb-5">Dashboard for Personal Finances Control</h1>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold mb-3">Income vs. Expenses</h2>
          <Bar data={incomeVsExpensesData} options={options} />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold mb-3">Monthly Spending</h2>
          <Pie data={monthlySpendingData} options={{responsive: true}} />
        </div>
      </div>
      <Transactions />
    </div>
  );
};

export default MainContent;
