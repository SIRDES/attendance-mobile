import React, { useEffect } from "react";
import { Text, View, SafeAreaView, Pressable, Image } from "react-native";
import { COLOR, styles } from "../../Theme";

import { Redirect, RelativePathString, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import style from "@/styles/SettingsStyle";
import { Ionicons } from "@expo/vector-icons";
import { SCREENS } from "@/constants";
import { ProfileImageComponent } from "@/components/ProfileImageComponent";
import { ListItem } from "@/components/ListItem";
import { Loader } from "@/components/Loader";
import { StatusBar } from "expo-status-bar";

const MenuScreen = () => {
  const { isLoading, user, logout } = useAuth();
  const router = useRouter();
  const list = [
    {
      id: "1",
      icon: "person-outline",
      label: "Profile",
      url: "/settings/profile",
    },
    {
      id: "2",
      icon: "lock-closed-outline",
      label: "Change Password",
      url: "/change-password",
    },
    {
      id: "3",
      icon: "notifications-outline",
      label: "Notification",
      url: "/settings/notifications",
    },
  ];

  // useEffect(() => {
  //   if (user && user.user._id) {
  //     getUserProfile({ id: user.user._id });
  //   }
  // }, [user]);

  const onPressItem = (item: any) => {
    if (item) {
      // <Redirect href={item.url} />;
      router.replace(item.url);
    }
  };

  const onPressLogout = () => {
    logout();
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={style.container}>
        <ProfileImageComponent
          name={user?.name}
          image={user?.profileImage || null}
        />
        <View style={style.line} />
        <View style={style.topContainer}>
          {list.map((item, index) => (
            <ListItem
              key={item.id}
              item={item}
              imgStyle={style.icon}
              labelStyle={style.label}
              rightIconStyle={style.label}
              showBadge={
                item.url === SCREENS.NOTIFICATIONS &&
                user?.notificationCount &&
                user?.notificationCount > 0
              }
              onPress={() => onPressItem(item)}
            />
          ))}
        </View>
        <Pressable style={style.logoutBtn} onPress={onPressLogout}>
          <Ionicons name="log-out-outline" size={24} color={COLOR.skyBlue} />
          <Text style={styles.textBtn}>Logout</Text>
        </Pressable>
        {/* <Loader visible={isLoading} /> */}
      </SafeAreaView>
    </>
  );
};
export default MenuScreen;
