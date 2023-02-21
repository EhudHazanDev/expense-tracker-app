import React from 'react'

export const PreviewTransaction = (transaction) => {
  return (
    <div className="PreviewTransaction">
      <h4>PreviewHistory</h4>
      {transaction.text}
      {transaction.amount}
    </div>
  )
}
