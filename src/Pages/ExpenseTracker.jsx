import React , {useState,useEffect} from 'react'
import { TransactionsList } from '../cmps/TransactionList'
import { AddTransaction } from '../cmps/AddTransaction'

export const ExpenseTracker = () => {

    const [amount, setAmount] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpanse, setTotalExpanse] = useState(0)
    const [transactions, setTransactions] = useState(null);
    const [message, setMessage] = useState("")

    // useEffect(() => {
    //     const transactions = TransactionService.query();
    //     if(!transactions) setMessage("There are no transactions yet");
    //   }, []);
    
    const getTransactions = (transactions) => {
        setTransactions(transactions);
    }
    
    return (
        <div>
            <div className="mainArea">
                <h1>Expense Tracker</h1>
                <h2>Your Balance:</h2>
                <p>{amount}</p>
                <div>
                    <p>{totalIncome}</p>
                    <p>{totalExpanse}</p>
                </div>
            </div>
            <TransactionsList/>
            <AddTransaction getTransactions={getTransactions}/>
        </div>
    )
}
