import React from 'react'

export const PreviewTransaction = ({ transaction }) => {
  return (
    // <div className="PreviewTransaction" 
    <div className = {transaction.amount<0 ? 'PreviewTransactionRed' : 'PreviewTransactionGreen'}>
      <p>{transaction.text}</p>
      <div>
        <p>{transaction.amount > 0 ? "+" : ""}{transaction.amount}</p>
      </div>
    </div>
  )
}

// const getRetestColor = () => {
//   if (project.score >= 70 && project.score <= 90 && project.madeDadeline === true)
//     return 'beforeLimit';
//   if (project.score < 70)
//     return 'overLimit';
//   return 'beforeLimit';
// }

// return (
//   <div className="projectPreview">
//     <p>{project.id}</p>
//     <p>{project.name}</p>
//     <p className = {getColor()}> {project.score}</p>
//     <p>{project.durationInDays}</p>
//     <p className = {project.bugsCount>50 ? 'overLimit' : 'beforeLimit' }>{project.bugsCount}</p>
//     <p>{project.madeDadeline ? 'Yes' : 'False'}</p>
//     <p className ={getRetestColor()}>{isNeedRetest()}</p>
//   </div>
// )
// }