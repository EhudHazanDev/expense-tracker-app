import React from 'react'
import { PreviewTransaction } from './PreviewTransaction'

export const TransactionsList = ({transactions}) => {
  const message = "There are no transactions in this account yet.";
  
  return (
    <div>
      <h3>History</h3>
      { transactions ? 
        transactions.map( transaction =>
          <PreviewTransaction transaction={transaction} />)
        
      :
      <p className="message"> { message}</p>
      }
    </div>
  )
}
