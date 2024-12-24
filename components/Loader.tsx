import { COLOR } from "@/Theme";
import React from "react";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export const Loader = ({ visible }: { visible: boolean }) => {
  return visible ? (
    <View style={styles.loaderStyle}>
      <Spinner visible={visible} color={COLOR.primaryColor} />
    </View>
  ) : null;
};

const styles = {
  loaderStyle: {
    flex: 1,
  },
};

// make this component available to the app
