import { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpenseOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
      fallBackText="No registered expenses creeted yet"
    />
  );
}

export default AllExpenses;
