import React, { useState } from 'react';
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


const initialData = {
  incomeVsExpenses: {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [3000, -1500],
        backgroundColor: ['#4CAF50', '#F44336']
      }
    ]
  },
  monthlySpending: {
    labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment'],
    datasets: [
      {
        label: 'Spending',
        data: [1200, 300, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED']
      }
    ]
  }
};

const MainContent: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [data, setData] = useState(initialData);

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const month = event.target.value;
    setSelectedMonth(month);
    // Update the data based on the month selected
    const newData = {
      incomeVsExpenses: { ...data.incomeVsExpenses },
      monthlySpending: { ...data.monthlySpending }
    };

    // Example: Adjust data based on month (you can customize this logic)
    if (month === '2023-02') {
      newData.incomeVsExpenses.datasets[0].data = [2500, -1300];
      newData.monthlySpending.datasets[0].data = [1100, 250, 100, 90];
    } else {
      newData.incomeVsExpenses.datasets[0].data = [3000, -1500];
      newData.monthlySpending.datasets[0].data = [1200, 300, 150, 100];
    }

    setData(newData);
  };

  return (
    <div className="flex-1 p-10">
      <h1 className="font-bold text-xl mb-5">Dashboard for Personal Finances Control</h1>
      <div>
        <input
          type="month"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold mb-3">Income vs. Expenses</h2>
          <Bar data={data.incomeVsExpenses} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-bold mb-3">Monthly Spending</h2>
          <Pie data={data.monthlySpending} options={{ responsive: true }} />
        </div>
      </div>
      <Transactions />
    </div>
  );
};

export default MainContent;