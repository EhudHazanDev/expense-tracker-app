import React from 'react'
import { TransactionsList } from '../cmps/TransactionList'
import { BalanceView } from '../cmps/BalanceView';

export const TransactionInfo = ({transactions}) => {
  return (
    <div className="TransactionInfo">
            <BalanceView transactions={transactions} />
            <TransactionsList transactions={transactions} />
    </div>

  )
}
