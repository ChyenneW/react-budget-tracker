import React from 'react';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <h1>My Budget Planner</h1>
      <div>
        <div>
          <Budget />
        </div>
        <div>
          <Remaining />
        </div>
        <div>
          <ExpenseTotal />
        </div>
      </div>
    </div>
  );
}

export default App;
