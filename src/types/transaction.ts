export interface Transaction {
    id: number;
    date: string;
    description: string;
    category: 'Income' | 'Expense';
    amount: number;
  }
  