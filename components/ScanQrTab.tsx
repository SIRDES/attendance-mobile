import { COLOR } from "@/Theme";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

const CustomTabComponent = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "scan_qr" && styles.activeTab]}
        onPress={() => setActiveTab("scan_qr")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "scan_qr" && styles.activeTabText,
          ]}
        >
          Scan QR
        </Text>
      </TouchableOpacity>
      <Pressable
        style={[styles.tab, activeTab === "assign_qr" && styles.activeTab]}
        onPress={() => setActiveTab("assign_qr")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "assign_qr" && styles.activeTabText,
          ]}
        >
          Asign QR Code
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomTabComponent;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "transparent",
    borderRadius: 25,
    margin: 20,
    padding: 5,
    elevation: 1, // For shadow on Android
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#fff",
    shadowColor: "#000",
  },
  tabText: {
    fontSize: 16,
    // fontWeight: "bold",
    color: "#ccc",
  },
  activeTabText: {
    color: COLOR.primaryColor,
    fontWeight: "bold",
  },
});
