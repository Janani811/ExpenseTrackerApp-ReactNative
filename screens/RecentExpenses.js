import { useContext, useEffect, useState } from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expenseContext = useContext(ExpensesContext);

  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expenseContext.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch Expenses!");
      }

      setIsFetching(false);
      // setFetchedExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expenseContext?.expenses?.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense?.date >= date7daysAgo && expense?.date <= today;
  });

  return (
    <ExpenseOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days Expenses"
      fallBackText="No registered expenses on last 7 days"
    />
  );
}

export default RecentExpenses;
