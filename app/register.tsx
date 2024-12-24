import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as DocumentPicker from "expo-document-picker";

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    momo: "",
    dob: new Date(),
    gender: "",
    companyName: "",
    idType: "",
    idNumber: "",
    area: "",
    city: "",
    address: "",
    accountName: "",
    businessRegNo: "",
    primaryContactName: "",
    primaryContactNumber: "",
    natureOfBusiness: "",
    numberOfOutlets: "",
    declarationOfAgreement: "",
    businessAddress: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [files, setFiles] = useState({
    passportPhoto: null,
    idFront: null,
    idBack: null,
    statement: null,
  });

  const handleInputChange = (name: string, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || formData.dob;
    setShowDatePicker(false);
    handleInputChange("dob", currentDate);
  };

  const pickDocument = async (fileType: string) => {
    try {
      const result: any = await DocumentPicker.getDocumentAsync();
      if (result?.type === "success") {
        setFiles((prevState) => ({
          ...prevState,
          [fileType]: result,
        }));
      }
    } catch (err) {
      console.error("Error picking document:", err);
    }
  };

  const submitForm = async () => {
    // Here you would implement the API call to submit the form data
    // For now, we'll just show an alert
    Alert.alert(
      "Form Submitted",
      "Your registration has been submitted successfully."
    );
    
  };

  return (
    <ScrollView style={styles.container}>
      <Picker
        selectedValue={formData.title}
        onValueChange={(value) => handleInputChange("title", value)}
      >
        <Picker.Item label="Select Title" value="" />
        <Picker.Item label="Mr." value="Mr." />
        <Picker.Item label="Mrs." value="Mrs." />
        <Picker.Item label="Miss" value="Miss" />
        <Picker.Item label="Dr." value="Dr." />
        <Picker.Item label="Prof." value="Prof." />
      </Picker>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={formData.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
        placeholder="Enter first name"
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={formData.lastName}
        onChangeText={(value) => handleInputChange("lastName", value)}
        placeholder="Enter last name"
      />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        value={formData.mobile}
        onChangeText={(value) => handleInputChange("mobile", value)}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        placeholder="Enter email address"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={formData.password}
        onChangeText={(value) => handleInputChange("password", value)}
        placeholder="Enter password"
        secureTextEntry
      />

      <Text style={styles.label}>MOMO Number</Text>
      <TextInput
        style={styles.input}
        value={formData.momo}
        onChangeText={(value) => handleInputChange("momo", value)}
        placeholder="Enter MOMO number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.input}>{formData.dob.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={formData.dob}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Picker
        selectedValue={formData.gender}
        onValueChange={(value) => handleInputChange("gender", value)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="M" />
        <Picker.Item label="Female" value="F" />
      </Picker>

      {/* Add more form fields here... */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => pickDocument("passportPhoto")}
      >
        <Text style={styles.buttonText}>Upload Passport Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => pickDocument("idFront")}
      >
        <Text style={styles.buttonText}>Upload ID Front</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => pickDocument("idBack")}
      >
        <Text style={styles.buttonText}>Upload ID Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => pickDocument("statement")}
      >
        <Text style={styles.buttonText}>Upload Statement</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1E61CE",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default RegistrationScreen;
