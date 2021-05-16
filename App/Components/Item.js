import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "#A9A9A9",
    height: 1,
  },
});

export const Item = ({ text, onPress, selected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Icon name={selected} size={20} />
    </TouchableOpacity>
  );
};

export const ItemSeparator = () => {
  return <View style={styles.separator} />;
};
