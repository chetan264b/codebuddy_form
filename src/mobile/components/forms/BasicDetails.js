import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomTextInput from "../textInput/CustomTextInput";

const BasicDetails = ({
  firstName,
  lastName,
  address,
  setFirstName,
  setLastName,
  setAddress,
}) => {
  return (
    <View style={styles.header}>
      {/* <Text>BasicDetails </Text> */}
      <CustomTextInput
        label={"First Name"}
        placeHolder={"Enter first name"}
        value={firstName}
        onChange={setFirstName}
      />
      <CustomTextInput
        label={"Last Name"}
        placeHolder={"Enter last name"}
        value={lastName}
        onChange={setLastName}
      />
      <CustomTextInput
        label={"Address"}
        placeHolder={"Enter address"}
        value={address}
        onChange={setAddress}
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

export default BasicDetails;
