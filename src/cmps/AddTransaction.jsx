import React from 'react'
import { useState } from 'react';
import TransactionService  from '../services/TransactionService'

export const AddTransaction = ({ getTransactions }) => {

  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");

  const createTransaction = (event) => {
    const newTransaction = {
      text,
      amount,
    };
    const TransactionEntity = TransactionService.add(newTransaction);
    getTransactions(TransactionEntity);
    event.preventDefault();
  };

  return (
    <div className = "addTransaction">
      <h3>Add Transaction</h3>
      <label id="Text">Text</label><br></br>
      <input type="text"
        onChange={(event) => { setText(event.target.value); }}
        placeholder="Insert text..." /><br></br><br></br>
      <label id="Text">Amount</label><br></br>
      <input type="text"
        onChange={(event) => { setAmount(event.target.value); }}
        placeholder="Insert amount..." /><br></br><br></br>
      <button onClick={(event) => {
        createTransaction(event);
      }}
      >Add Transacton
      </button>
    </div>
  )
}
