import React from 'react'
import './App.css'
import Header from './componentes/Header'
import Balance from './componentes/Balance'
import  IncomeExpenses  from './componentes/IncomeExpenses'
import   TransactionList   from './componentes/TransactionList'
import  AddTransaction  from './componentes/AddTransaction'
import { GlobalProvider } from './context/GloballState'
function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
