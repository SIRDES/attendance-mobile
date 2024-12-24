import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useAuth } from "@/context/AuthContext";
import { Loader } from "@/components/Loader";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLOR } from "@/Theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { user } = useAuth();
  if (!user) {
    // return <Loader visible />;
    return <Redirect href="/login" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <IconSymbol
              size={30}
              name="house.fill"
              color={focused ? "black" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          headerShown: true,
          headerTitle: "Scan QR",
          headerStyle: {
            backgroundColor: "#00384c", // Dark teal background color as in the image
          },
          headerTitleStyle: {
            color: "white", // White text for the header title
            fontSize: 18, // Adjust font size to match the design
            fontWeight: "bold",
          },
          headerTitleAlign: "center", // Center-align the title
          headerTintColor: "white", // Color for the back button or icons
          headerBackgroundContainerStyle: {
            backgroundColor: "#00384c",
          },
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color={focused ? "#00384c" : color} // Match focused color to the header
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "More",
          tabBarIcon: ({ focused, color }) => (
            <Feather
              name="more-vertical"
              size={24}
              color={focused ? "black" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
