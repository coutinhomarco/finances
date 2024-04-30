import React, { useState, useEffect } from 'react';
import { Transaction } from '../../types/transaction';

interface TransactionModalProps {
  transaction: Transaction | null;
  onSave: (transaction: Transaction) => void;
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ transaction, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    date: '',
    description: '',
    category: 'Income' as 'Income' | 'Expense',
    amount: 0,
  });

  useEffect(() => {
    if (transaction) {
      setFormData({
        id: transaction.id,
        date: transaction.date,
        description: transaction.description,
        category: transaction.category,
        amount: transaction.amount,
      });
    } else {
      setFormData({
        id: Date.now(),
        date: '',
        description: '',
        category: 'Income',
        amount: 0,
      });
    }
  }, [transaction]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close" aria-label="Close">&times;</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} /><br /><br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} /><br /><br />
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange as () => void}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select><br /><br />
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" value={formData.amount.toString()} onChange={handleChange} /><br /><br />
          <button type="submit" className="button-save">Save</button>
          <button type="button" onClick={onClose} className="button-cancel">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
