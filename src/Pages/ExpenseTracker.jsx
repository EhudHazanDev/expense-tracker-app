import React, { useState, useEffect } from 'react'
import { AddTransaction } from '../cmps/AddTransaction'
import { TransactionInfo } from '../cmps/TransactionInfo';
import { TransactionService } from '../services/TransactionService';

export const ExpenseTracker = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        const trans = TransactionService.query();
        setTransactions(trans);
    }, []);

    const updateTransaction = () => {   
        const transactionEntity = TransactionService.query();     
        setTransactions(transactionEntity);
    }

    return (
        <div>
            <h1>Expense Tracker</h1>
            <TransactionInfo transactions={transactions} />
            <AddTransaction updateTransaction={updateTransaction} />
        </div>
    )
}
