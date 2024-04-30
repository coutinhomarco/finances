/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
// import { Transaction } from '../data/transactions';

interface TransactionModalProps {
  transaction: any;
  onSave: (transaction: any) => void;
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ transaction, onSave, onClose }) => {
  const [date, setDate] = useState(transaction.date);
  const [description, setDescription] = useState(transaction.description);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount);

  useEffect(() => {
    setDate(transaction.date);
    setDescription(transaction.description);
    setCategory(transaction.category);
    setAmount(transaction.amount);
  }, [transaction]);

  const handleSave = () => {
    onSave({ ...transaction, date, description, category, amount });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">&times;</span>
        <form>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={date} onChange={e => setDate(e.target.value)} /><br /><br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={description} onChange={e => setDescription(e.target.value)} /><br /><br />
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select><br /><br />
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} /><br /><br />
          <button type="button" onClick={handleSave} className="button-save">Save</button>
          <button type="button" onClick={onClose} className="button-cancel">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
