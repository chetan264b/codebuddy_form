import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import AuthDetails from "../components/forms/AuthDetails";
import BasicDetails from "../components/forms/BasicDetails";
import ContactDetails from "../components/forms/ContactDetails";

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [savedData, setSavedData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] = useState(false);

  const onBackPress = () => {
    console.log("onBackPress");
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const emailValidation = () => {
    if (email === "") {
      Alert.alert("Email is Mandatory");
      return false;
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailRegex.test(email)) {
      return true;
    } else {
      Alert.alert("Please enter correct email address");
      return false;
    }
  };

  const validatePassword = () => {
    if (password === "") {
      Alert.alert("Password is Mandatory");
      return false;
    }
    const passwordRegex =
      /(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/;
    if (passwordRegex.test(password)) {
      return true;
    } else {
      Alert.alert("Please check your password.");
    }
  };

  const onSaveAndNextPress = () => {
    console.log("onSaveAndNextPress");
    if (activeStep === 0) {
      if (emailValidation() && validatePassword()) {
        setActiveStep(activeStep + 1);
      }
    } else {
      if (activeStep != 2) {
        setActiveStep(activeStep + 1);
      }
    }
  };

  const checkAplha = (text) => {
    let test = /[^a-zA-Z]/;

    if (test.test(text)) {
      return true;
    } else {
      return false;
    }
  };

  const onSave = () => {
    console.log(email, password, emailValidation(), validatePassword());
    if (activeStep === 0) {
      if (emailValidation() && validatePassword()) {
        Alert.alert("Data Saved");
        setSavedData({ ...savedData, email: email, password: password });
      }
    } else if (activeStep === 1) {
      if (firstName === "") {
        Alert.alert("Please enter First Name");
      } else if (address === "") {
        Alert.alert("Please enter address");
      } else if (checkAplha(firstName)) {
        Alert.alert("Please enter correct first name");
      } else if (checkAplha(lastName)) {
        Alert.alert("Please enter correct last name");
      } else if (address.length < 10) {
        Alert.alert("Minimum length of address is 10.");
      } else if (firstName.length > 50 || firstName.length < 2) {
        Alert.alert("First Name should be grater than 2 and less than 50");
      } else if (firstName.length > 50 || firstName.length < 2) {
        Alert.alert("First Name should be grater than 2 and less than 50");
      } else {
        Alert.alert("Data Saved");
        setSavedData({
          ...savedData,
          firstName: firstName,
          lastName: lastName,
          address: address,
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        {console.log(savedData)}
        <Text style={styles.headerText}>Form </Text>
      </View>
      <View style={styles.formHeader}>
        <View style={activeStep === 0 && styles.activeTab}>
          <Text style={styles.tabText}>Auth Details </Text>
        </View>
        <View style={activeStep === 1 && styles.activeTab}>
          <Text style={styles.tabText}>Basic Details </Text>
        </View>
        <View style={activeStep === 2 && styles.activeTab}>
          <Text style={styles.tabText}>Contact Details </Text>
        </View>
      </View>

      <View style={styles.formView}>
        {activeStep === 0 && (
          <AuthDetails
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}
        {activeStep === 1 && (
          <BasicDetails
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            address={address}
            setAddress={setAddress}
          />
        )}
        {activeStep === 2 && (
          <ContactDetails
            countryCode={countryCode}
            mobileNumber={mobileNumber}
            setCountryCode={setCountryCode}
            setMobileNumber={setMobileNumber}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSaveAndNextPress} style={styles.button}>
          <Text style={styles.buttonText}>Save and Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "white",
  },
  formHeader: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "green",
  },
  textInput: {},
  buttonContainer: { flexDirection: "row", justifyContent: "space-around" },
  button: { borderWidth: 1, borderRadius: 4, padding: 10 },
  buttonText: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
  header: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: { padding: 10, fontWeight: "bold", color: "black", fontSize: 15 },
  formView: { flex: 1 },
});

export default Form;
