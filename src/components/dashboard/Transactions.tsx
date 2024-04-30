import React, { useState } from 'react';
import { Transaction } from '../../types/transaction';
import TransactionModal from './TransactionModal';

const Transactions: React.FC = () => {
  const initialTransactions: Transaction[] = [];
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [modalTransaction, setModalTransaction] = useState<Transaction | null>(null);
  const [openNewModal, setOpenNewModal] = useState<boolean>(false);


  const openModalForNew = () => {
    setOpenNewModal(true);
    setModalTransaction(null);
  };

  const openModalForEdit = (id: number) => {
    const transaction = transactions.find(t => t.id === id);
    if (transaction) setModalTransaction(transaction);
  };

  const closeModal = () => {
    setModalTransaction(null);setOpenNewModal(false);
  }

  const saveTransaction = (transaction: Transaction) => {
    if (modalTransaction) {
      const updatedTransactions = transactions.map(t => t.id === transaction.id ? transaction : t);
      setTransactions(updatedTransactions);
    } else {
      setTransactions([...transactions, transaction]);
    }
    closeModal();
  };

  const deleteTransaction = (id: number) => {
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-bold mb-3">Transactions</h2>
      <button onClick={openModalForNew} className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Transaction</button>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Date</th>
            <th className="p-2">Description</th>
            <th className="p-2">Category</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="p-2">{transaction.date}</td>
              <td className="p-2">{transaction.description}</td>
              <td className={`p-2 ${transaction.category.toLowerCase()}`}>{transaction.category}</td>
              <td className="p-2">{transaction.amount}</td>
              <td className="p-2">
                <button onClick={() => openModalForEdit(transaction.id)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</button>
                <button onClick={() => deleteTransaction(transaction.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openNewModal && <TransactionModal transaction={modalTransaction} onSave={saveTransaction} onClose={closeModal} />}
    </div>
  );
};

export default Transactions;
