import { View, StyleSheet, Text } from "react-native";

import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { GlobalStyles } from "../../constants/style";

function ExpenseOutput({ expenses, expensesPeriod, fallBackText }) {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
