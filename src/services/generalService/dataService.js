import { Transactions } from "../../data/dummyData";
import { storageService } from "./storageService";

export const dataService = {
    initData,
    removeData,
}

function initData() {
    storageService.newEntity("Transactions", Transactions);
}

function removeData(params) {
    storageService.deleteStorage();
}