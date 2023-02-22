import React from 'react'
import { PreviewTransaction } from './PreviewTransaction'

export const TransactionsList = ({transactions}) => {
  const message = "There are no transactions in this account yet.";
  
  return (
    <div className="transactionsList">
      <h3>History</h3>
      { transactions ? 
        transactions.map( transaction =>
          <PreviewTransaction key={transaction._id} transaction={transaction} />)
        
      :
      <p className="message"> { message}</p>
      }
    </div>
  )
}
