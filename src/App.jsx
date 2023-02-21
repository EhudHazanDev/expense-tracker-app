import { useEffect } from 'react';
import { ExpenseTracker } from './Pages/ExpenseTracker';
import { dataService }  from "./services/generalService/dataService";

export const App = () => {

  useEffect(() => {
    dataService.removeData();
    dataService.initData();
  }, []);
  
  return (
    <div className="App">
      <ExpenseTracker/>
    </div>
  );
}

