import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from "react-native";
import axios from "axios";
import { Link, Navigator } from "expo-router";
import { AppInput } from "@/components/AppInput";
import style from "@/styles/changePasswordStyles";
import { COLOR, FONT_FAMILY, FONT_SIZE, vh, vw } from "@/Theme";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (username && password) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "http://10.0.2.2:8000/api/users/agent/token/",
          {
            mobile: username,
            password: password,
          }
        );
        if (response.status === 200) {
          // Navigate to WelcomePage
          // Navigator.Screen("Welcome");
        } else {
          Alert.alert("Error", response.data.message);
        }
      } catch (error: any) {
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert("Error", "Please enter both username and password");
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: "10%", paddingHorizontal: 20 }}>
      {/* <Text>Login</Text> */}
      {/* <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Email or Phone number"
      /> */}
      <View style={style.inputContainer}>
        <AppInput
          label="Email or Phone number"
          value={username}
          onChangeText={(text: React.SetStateAction<string>) =>
            setUsername(text)
          }
        />
      </View>
      <View style={style.inputContainer}>
        <AppInput
          label="Password"
          value={password}
          onChangeText={(text: React.SetStateAction<string>) =>
            setPassword(text)
          }
          secureTextEntry
        />
      </View>
      {/* <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
      /> */}
      {/* <Button
        title="Login"
        onPress={handleLogin}
        disabled={isLoading || !username || !password}
      /> */}
      <Pressable style={styles.appBtn} onPress={handleLogin}>
        <Text style={styles.appBtnLabel}>Login</Text>
      </Pressable>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      <View>
        <Text>
          Forgot password?{" "}
          <Link href="/forgot-password" style={styles.link}>
            Reset
          </Link>
        </Text>
      </View>
      <View style={styles.linkcontainer}>
        <Text>
          Don't have an account?{" "}
          <Link href="/register" style={styles.link}>
            Sign up
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  linkcontainer: {
    marginTop: 20,
  },
  appBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.primaryColor,
    paddingVertical: vh(13),
    borderRadius: 10,
    marginVertical: 15,
  },
  appBtnLabel: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: FONT_SIZE.medium,
    color: COLOR.white,
    lineHeight: vw(19),
  },
  link: {
    color: COLOR.primaryColor,
    textDecorationLine: "underline",
  },
});
