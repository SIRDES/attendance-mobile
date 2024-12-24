import React from "react";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const KeyboardScroll = ({
  children,
  contentContainerStyle,
  keyboardShouldPersistTaps,
  enableOnAndroid,
  ...props
}: any) => {
  return (
    <KeyboardAwareScrollView
      {...props}
      contentContainerStyle={contentContainerStyle}
      enableOnAndroid={enableOnAndroid || false}
      enableAutoAutomaticScroll={Platform.OS === "ios"}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

KeyboardScroll.defaultProps = {
  children: {},
  contentContainerStyle: {},
  keyboardShouldPersistTaps: "handled",
};
