import { COLOR } from "@/Theme";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabComponent;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    borderRadius: 25,
    margin: 20,
    padding: 5,
    elevation: 2, // For shadow on Android
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
    //elevation: 2, // Slight shadow for the active tab
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#888",
  },
  activeTabText: {
    // color: "red",
    color: COLOR.primaryColor,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
