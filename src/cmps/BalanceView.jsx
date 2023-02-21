import React, { useEffect, useState } from 'react'


export const BalanceView = ({transactions}) => {
  const [amount, setAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpanse, setTotalExpanse] = useState(0);

  useEffect(() => {
    calculateTotals();
    calculateAmount();
  }, [transactions])

  const calculateAmount = () => {
    let sum = 0;
    transactions.map((transaction) =>
      (sum += +transaction.amount)
    )
    setAmount(sum)
  }

  const calculateTotals = () => {
    let income = 0;
    let expanse = 0;
    transactions.map((transaction) =>
      (parseInt(transaction.amount) > 0 ? income += parseInt(transaction.amount) : expanse += parseInt(transaction.amount))
    )
    setTotalIncome(income);
    setTotalExpanse(expanse);
  }

  return (
    <div className="BalanceView">
      <h2>Your Balance:</h2>
      <p>{amount}</p>
      <div>
        <p>{totalIncome}</p>
        <p>{totalExpanse}</p>
      </div>
    </div>
  )
}
