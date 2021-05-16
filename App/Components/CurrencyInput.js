import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 2,
    flexDirection: "row",
  },
  country: {
    padding: 20,
    backgroundColor: "#E0E0E0",
    borderRightWidth: 2,
    borderColor: "#000000",
    borderStyle: "solid",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 12,
  },
});

export const CurrencyInput = ({
  text,
  value,
  editable,
  onButtonClick,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonClick}>
        <Text style={styles.country}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        editable={editable}
        onChangeText={onChangeText}
      />
    </View>
  );
};
