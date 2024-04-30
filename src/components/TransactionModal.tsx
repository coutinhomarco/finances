import React, { useState, useEffect } from 'react';
import { Transaction } from '../types/transaction';

interface TransactionModalProps {
  transaction: Transaction | null;
  onSave: (transaction: Transaction) => void;
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ transaction, onSave, onClose }) => {
  const [id, setId] = useState<number>(Date.now());
  const [date, setDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<'Income' | 'Expense'>('Income');
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (transaction) {
      setId(transaction.id);
      setDate(transaction.date);
      setDescription(transaction.description);
      setCategory(transaction.category);
      setAmount(transaction.amount);
    } else {
      setId(Date.now());
      setDate('');
      setDescription('');
      setCategory('Income');
      setAmount(0);
    }
  }, [transaction]);

  const handleSave = () => {
    onSave({
      id: id,
      date: date,
      description: description,
      category: category,
      amount: amount
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">&times;</span>
        <form>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} /><br /><br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} /><br /><br />
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={e => setCategory(e.target.value as 'Income' | 'Expense')}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select><br /><br />
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} /><br /><br />
          <button type="button" onClick={handleSave} className="button-save">Save</button>
          <button type="button" onClick={onClose} className="button-cancel">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
