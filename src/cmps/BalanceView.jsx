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
    setAmount(sum);
  }

  const calculateTotals = () => {
    let income = 0;
    let expanse = 0;
    transactions.map((transaction) =>
      (+transaction.amount > 0 ? income += +transaction.amount : expanse += +transaction.amount)
    )
    setTotalIncome(income);
    setTotalExpanse(expanse);
  }

  return (
    <div className="balanceView">
      <h3>Your Balance:</h3>
      <p className="amount">${amount}</p>
      <div className="total">
        <div className="leftSideIncome">
         <p className = "income">INCOME</p>
         <p style = {{color:"green"}}>${totalIncome}</p>
        </div>
        <div className="rightSideExpanse">
          <p className = "Expanse">EXPENSE</p>
          <p style = {{color:"red"}}>${totalExpanse}</p>
        </div>
      </div>
    </div>
  )
}
