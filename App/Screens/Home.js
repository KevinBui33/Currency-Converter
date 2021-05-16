import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CurrencyInput } from "../Components/CurrencyInput";
import { Context } from "../Context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    marginHorizontal: 70,
  },
});

export default ({ navigation }) => {
  const [value, setValue] = useState("0");
  const { topCurrency, bottomCurrency, rate } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <CurrencyInput
        text={topCurrency}
        value={value}
        onButtonClick={() =>
          navigation.push("CurrencyTypeList", {
            currCountry: topCurrency,
            isTopCurrency: true,
          })
        }
        onChangeText={(text) => setValue(text)}
      />
      <CurrencyInput
        text={bottomCurrency}
        editable={false}
        value={value && `${(parseFloat(value) * rate).toFixed(2)}`}
        onButtonClick={() =>
          navigation.push("CurrencyTypeList", {
            currCountry: bottomCurrency,
            isTopCurrency: false,
          })
        }
      />
    </View>
  );
};
