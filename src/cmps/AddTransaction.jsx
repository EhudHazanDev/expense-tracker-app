import React from 'react'
import { useState } from 'react';
import {TransactionService}  from '../services/TransactionService'

export const AddTransaction = ({ updateTransaction }) => {

  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");

  const createTransaction = (event) => {
    const newTransaction = {
      text,
      amount,
    };
    TransactionService.add(newTransaction)
    updateTransaction();
    event.preventDefault();
  };

  return (
    <div className = "addTransaction">
      <h3>Add new transaction</h3>
      <label id="Text">Text</label><br></br>
      <input className="setText" type="text"
        onChange={(event) => { setText(event.target.value); }}
        placeholder="Enter text..." /><br></br><br></br>
      <label id="Text">Amount</label><br></br>
      <input className="setAmount" type="text"
        onChange={(event) => { setAmount(event.target.value); }}
        placeholder="Enter amount..." /><br></br><br></br>
      <button className="addTransactionButton" onClick={(event) => {
        createTransaction(event);
      }}
      >Add Transacton
      </button>
    </div>
  )
}
