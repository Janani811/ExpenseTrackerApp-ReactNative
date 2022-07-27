import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function ExpenseSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0); // 0 is sum inital value , reduce funtion gives the single value of array
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>RS {expensesSum?.toFixed()}</Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
