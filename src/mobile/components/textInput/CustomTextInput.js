import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const CustomTextInput = ({ label, placeHolder, value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeHolder={placeHolder}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: { fontSize: 18, fontWeight: "bold" },
  textInput: {
    width: 300,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#A23111",
    padding: 10,
  },
  container: { marginTop: 15 },
});

export default CustomTextInput;
