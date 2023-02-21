import React from 'react'

export const PreviewTransaction = ({transaction}) => {
  return (
    <div className="PreviewTransaction">
      <p>{transaction.text}</p>
      <p>{transaction.amount}</p>
    </div>
  )
}
