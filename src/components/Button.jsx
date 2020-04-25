import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const Button = ({ label, style, onPress, txtStyle }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={[styles.txt, txtStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  btn: {
    width: width - 60,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    elevation: 7,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
