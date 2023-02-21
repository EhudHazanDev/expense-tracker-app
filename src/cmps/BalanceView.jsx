import React, { useEffect, useState } from 'react'


export const BalanceView = (transactions) => {
  const [amount, setAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpanse, setTotalExpanse] = useState(0);

  useEffect(() => {
    calculate();
    calculateAmount();
  }, [])

  const calculateAmount = () => {
    let sum = 0 ; 
  // transactions.map((trans) =>
  //     (sum += trans.amount)
  //   )
    setAmount(sum)
  }

  const calculate = () => {
    let income = 0, expanse = 0;
    // transactions.map((trans) =>
    //   (trans.amount > 0 ? income += trans.amount : expanse += trans.amount)
    // )
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
