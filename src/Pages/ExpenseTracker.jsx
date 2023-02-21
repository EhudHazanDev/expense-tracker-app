import React , {useState} from 'react'
import { TransactionsList } from '../cmps/TransactionList'
import { AddTransaction } from '../cmps/AddTransaction'
import { BalanceView } from '../cmps/BalanceView';

export const ExpenseTracker = () => {

    const [transactions, setTransactions] = useState(null);

    
    const getTransactions = (transactions) => {
        setTransactions(transactions);
    }
    
    return (
        <div>
            <div className="mainArea">
                <h1>Expense Tracker</h1>
            </div>
            <BalanceView transactions={transactions}/>
            <TransactionsList transactions={transactions}/>
            <AddTransaction getTransactions={getTransactions}/>
        </div>
    )
}
