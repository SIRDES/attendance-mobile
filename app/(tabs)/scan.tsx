import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera, CameraView, CameraType, FlashMode } from "expo-camera";
import * as Location from "expo-location";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomTabComponent from "@/components/ScanQrTab";

const ScanQRScreen: React.FC = () => {
  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);
  const [hasLocationPermission, setHasLocationPermission] =
    useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("scan_qr");
  const [scanned, setScanned] = useState<boolean>(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  // Request Permissions
  useEffect(() => {
    (async () => {
      // Camera permissions
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");

      // Location permissions
      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(locationStatus === "granted");

      if (locationStatus === "granted") {
        const userLocation = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        });
      } else {
        Alert.alert(
          "Permission Denied",
          "Location permission is required to use this feature."
        );
      }
    })();
  }, []);

  const [torch, setTorch] = useState<boolean>(false);

  const toggleTorch = () => {
    setTorch((prev) => !prev);
  };

  // Handle QR Code Read
  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);

    if (location) {
      Alert.alert(
        "QR Code Scanned",
        `QR Code: ${data}\nLocation: Latitude ${location.latitude}, Longitude ${location.longitude}`
      );
      console.log("QR Code Data:", data);
      console.log("Location Data:", location);
    } else {
      Alert.alert("Error", "Failed to get location. Please try again.");
    }

    // Reset scanning state after a delay to allow for rescans
    setTimeout(() => setScanned(false), 2000);
  };

  if (!hasCameraPermission || !hasLocationPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Camera and Location permissions are required to use this feature.
        </Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/* <Text style={styles.title}>Scan QR</Text> */}

        <CameraView
          // onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          // style={styles.camera}
          // ratio="16:9"
          enableTorch={torch}
          flash="on"
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          
          style={styles.camera}
          // ratio="16:9"
        >
          <CustomTabComponent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <View style={styles.overlay}>
            <Text style={styles.instructionText}>
              Use your camera to place QR code in the square
            </Text>
            <TouchableOpacity style={styles.flashButton} onPress={toggleTorch}>
              <Ionicons
                name="flashlight"
                size={24}
                color={torch ? "yellow" : "white"}
              />
            </TouchableOpacity>
          </View>
        </CameraView>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enter ID Manually</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    // paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  camera: {
    flex: 1,
    width: "100%",
    // aspectRatio: 16 / 9,
    // justifyContent: "flex-end",
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  instructionText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  permissionText: {
    fontSize: 16,
    textAlign: "center",
    margin: 20,
    color: "#FF0000",
  },
  flashButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScanQRScreen;
