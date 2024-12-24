/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Animated,
  View,
  Easing,
  Pressable,
  Image,
  Platform,
} from "react-native";
// import { DEFAULT_COUNTRY_CODE } from "../Config";
// import { ImagePath } from "../Contstants";
import { COLOR, FONT_FAMILY, FONT_SIZE, vh, vw } from "../Theme";

type Props = {
  label: string;
  placeholder: string;
  onChangeText: () => void;
  keyboardType?: any;
  inputRef?: any;
  value?: any;
  mobileInput?: boolean;
  returnKeyType?: string;
  containerColor?: string;
  rightIcon?: any;
  onPressRightIcon?: any;
  rightIconStyle?: any;
  noFloatingText?: boolean;
  cardNumberInput?: boolean;
  autoCapitalize?: any;
  userCountry?: any;
};
export const AppInput = ({
  label,
  placeholder,
  onChangeText,
  keyboardType,
  inputRef,
  value,
  mobileInput,
  returnKeyType,
  containerColor,
  rightIcon,
  onPressRightIcon,
  rightIconStyle,
  noFloatingText,
  cardNumberInput,
  autoCapitalize,
  userCountry,
  ...props
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  return mobileInput ? (
    <View style={style.outerContainer}>
      <View style={style.mobileContainer}>
        <Animated.Text
          style={[
            style.label,
            {
              paddingVertical: isFocused || value ? vw(6) : 0,
              left: isFocused || value ? vw(14) : vw(5),
              fontSize:
                isFocused || value ? FONT_SIZE.exSmall : FONT_SIZE.medium,
              transform: [
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [vw(11), -vw(12)],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange:
                      Platform.OS == "ios" ? [vw(10), 0] : [vw(13), vw(3)],
                  }),
                },
              ],
            },
          ]}
        >
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={style.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
          keyboardType="phone-pad"
          returnKeyType="done"
        />
      </View>
    </View>
  ) : (
    <View
      style={[
        style.outContainer,
        // {backgroundColor: containerColor ? containerColor : COLOR.white},
      ]}
    >
      <View
        style={[
          style.container,
          // {backgroundColor: containerColor ? containerColor : COLOR.white},
        ]}
      >
        {noFloatingText ? null : (
          <Animated.Text
            style={[
              style.label,
              {
                paddingVertical: isFocused || value ? vw(6) : 0,
                left: isFocused || value ? vw(20) : vw(10),
                fontSize:
                  isFocused || value ? FONT_SIZE.exSmall : FONT_SIZE.medium,
                transform: [
                  {
                    translateY: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [vw(11), -vw(12)],
                    }),
                  },
                  {
                    translateX: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange:
                        Platform.OS == "ios" ? [vw(10), 0] : [vw(13), vw(3)],
                    }),
                  },
                ],
              },
            ]}
          >
            {label}
          </Animated.Text>
        )}
        <TextInput
          {...props}
          style={style.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={
            cardNumberInput ? (isFocused ? placeholder : "") : placeholder
          }
          ref={inputRef}
          keyboardType={keyboardType || "default"}
          returnKeyType={returnKeyType || "next"}
          autoCapitalize={autoCapitalize || "none"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
        />
      </View>
      {rightIcon && (
        <Pressable style={style.rightBtn} onPress={onPressRightIcon}>
          <Image source={rightIcon} style={[style.rightImg, rightIconStyle]} />
        </Pressable>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  outContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  outerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.white,
    borderRadius: 10,
    paddingHorizontal: vw(20),
  },
  pickerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mobileContainer: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    paddingStart: vw(14),
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    borderRadius: 10,
    paddingHorizontal: vw(20),
    marginRight: vw(10),
  },
  labelContainer: {
    position: "absolute",
    left: vw(6),
    top: vw(10),
  },
  label: {
    position: "absolute",
    top: vw(9),
    lineHeight: vw(18),
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: FONT_SIZE.medium,
    color: COLOR.lightPrimaryTextClr,
    // marginBottom: vw(5),
  },
  input: {
    color: COLOR.primaryColor,
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: FONT_SIZE.medium,
    lineHeight: vw(24),
    paddingTop: vw(10),
    // paddingBottom: vw(4),
    marginVertical: vh(5),
    paddingVertical: vh(5),
    // backgroundColor: COLOR.lightPrimaryTextClr,
  },
  downKey: {
    height: vh(5),
    width: vw(10),
  },
  downKeyBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: vw(5),
  },
  rightImg: {
    height: vw(24),
    width: vw(24),
  },
  rightBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: vw(8),
  },
});
