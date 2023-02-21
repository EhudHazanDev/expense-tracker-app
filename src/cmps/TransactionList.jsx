import React from 'react'
import { PreviewTransaction } from './PreviewTransaction'

export const TransactionsList = (transactions) => {
  const message = "There are no transactions yet in this account.";

  return (
    <div>
      <h3>History</h3>
      {/* {transactions && 
        transactions.map((transaction) =>
          (<PreviewTransaction transaction={transaction} />)
        )
      } */}
      {!transactions && {message}}
    </div>
  )
}
