import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Input({ label, style, textInputConfiguration, inValid }) {
  const inputStyles = [styles.input];
  if (textInputConfiguration && textInputConfiguration.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (inValid) {
    inputStyles.push(styles.inValidInput);
  }
  return (
    <View style={[styles.inputContaniner, style]}>
      <Text style={[styles.label, inValid && styles.inValidLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfiguration}
        style={inputStyles}
        showSoftInputOnFocus={false}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContaniner: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
    // fontWeight: 500,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 6,
    borderRadius: 6,
    color: GlobalStyles.colors.primary700,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inValidLabel: {
    color: GlobalStyles.colors.error500,
  },
  inValidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
