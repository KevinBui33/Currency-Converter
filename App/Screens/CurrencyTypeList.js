import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Item, ItemSeparator } from "../Components/Item";
import { Context } from "../Context";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#FFFFFF",
  },
});

const CurrencyTypeList = ({ navigation, route }) => {
  const param = route.params;
  const { setTopCurrency, setBottomCurrency, allRates } = useContext(Context);

  return (
    <View style={styles.container}>
      <FlatList
        data={allRates}
        renderItem={({ item }) => {
          if (item === param.currCountry) {
            return (
              <Item
                text={item}
                onPress={() => {
                  if (param.isTopCurrency) {
                    setTopCurrency(item);
                  } else {
                    setBottomCurrency(item);
                  }
                  navigation.pop();
                }}
                selected="checkmark-outline"
              />
            );
          }
          return (
            <Item
              text={item}
              onPress={() => {
                if (param.isTopCurrency) {
                  setTopCurrency(item);
                } else {
                  setBottomCurrency(item);
                }
                navigation.pop();
              }}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

export default CurrencyTypeList;
