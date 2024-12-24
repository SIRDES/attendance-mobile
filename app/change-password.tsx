import React, { useState } from "react";
import { View, SafeAreaView, Keyboard } from "react-native";

import { putApi } from "@/config/ApiConfig";
import { CHANGE_PASSWORD_URL } from "@/constants/ApiContants";
import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { KeyboardScroll } from "@/components/KeyboardScroll";
import { Loader } from "@/components/Loader";
import style from "@/styles/changePasswordStyles";

const ChangePassword = () => {
  const [changePasswordForm, setResetPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const onChangeValues = (value: any, key: string) => {
    setResetPasswordForm((previousProps) => ({
      ...previousProps,
      [key]: value,
    }));
  };

  const onPressUpdate = () => {
    Keyboard.dismiss();

    setLoading(true);
    try {
      putApi(CHANGE_PASSWORD_URL, {
        currentPassword: changePasswordForm.oldPassword,
        newPassword: changePasswordForm.newPassword,
      })
        .then((res: any) => {
          const { success, message } = res;
          if (success) {
            // NavigationService.goBack();
          } else {
            alert(message);
          }
        })
        .catch((_err: any) => {})
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {}
  };

  return (
    <SafeAreaView style={style.container}>
      {/* <KeyboardScroll contentContainerStyle={style.topContainer}> */}
      <View>
        <View style={style.inputContainer}>
          <AppInput
            label="Old Password"
            value={changePasswordForm.oldPassword}
            secureTextEntry
            onChangeText={(value: any) => onChangeValues(value, "oldPassword")}
          />
        </View>
        <View style={style.inputContainer}>
          <AppInput
            label="New Password"
            value={changePasswordForm.newPassword}
            secureTextEntry
            onChangeText={(value: any) => onChangeValues(value, "newPassword")}
          />
        </View>
        <View style={style.inputContainer}>
          <AppInput
            label="Confirm New Password"
            value={changePasswordForm.confirmNewPassword}
            secureTextEntry
            onChangeText={(value: any) =>
              onChangeValues(value, "confirmNewPassword")
            }
          />
        </View>
      </View>
      {/* </KeyboardScroll> */}
      <Loader visible={loading} />
      <View style={style.btnContainer}>
        <AppButton label="Update" onPress={onPressUpdate} />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
