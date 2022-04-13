import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomTextInput from "../textInput/CustomTextInput";

const AuthDetails = ({ email, setEmail, password, setPassword }) => {
  return (
    <View style={styles.header}>
      {/* <Text style={styles.headerText}>AuthDetails </Text> */}
      <CustomTextInput
        label={"Email"}
        placeHolder={"Enter email"}
        value={email}
        onChange={setEmail}
      />
      <CustomTextInput
        label={"Password"}
        placeHolder={"Enter password"}
        value={password}
        onChange={setPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flex: 1, marginTop: 40 },
  headerText: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default AuthDetails;
