import { storageService } from "./generalService/storageService"

export const TransactionService = {
    query,
    add,
    getById,
    remove,
}

// transaction{
//  _id: "T001",
//  text: "camera",
//  amount: "220",
// }

const entityType = "Transactions";

function query(transactions = null) {
    let entities = transactions;
    if (!entities) entities = storageService.query(entityType);
    return entities;
}

function add(newTransaction) {
    const newTransactions = storageService.post(entityType, newTransaction, 4);
    return newTransactions;
}

function getById(TransactionId) {
    const Transaction = storageService.getById(entityType, TransactionId)
    return Transaction;
}

function remove(TransactionId) {
    const newTransactions = storageService.remove(TransactionId);
    return newTransactions;
}