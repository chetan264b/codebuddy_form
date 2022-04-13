import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomTextInput from "../textInput/CustomTextInput";

const ContactDetails = ({
  countryCode,
  setCountryCode,
  mobileNumber,
  setMobileNumber,
}) => {
  return (
    <View style={styles.header}>
      <CustomTextInput
        label={"Country Code"}
        placeHolder={"Enter Country Code"}
        value={countryCode}
        onChange={setCountryCode}
      />
      <CustomTextInput
        label={"Mobile Number"}
        placeHolder={"Enter Mobile Number"}
        value={mobileNumber}
        onChange={setMobileNumber}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: { flex: 1, marginTop: 40 },
  headerText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default ContactDetails;
