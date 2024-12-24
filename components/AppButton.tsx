import React from "react";
import { Text, Pressable, Image, StyleSheet } from "react-native";
import { COLOR, FONT_FAMILY, FONT_SIZE, vh, vw } from "../Theme";

export const AppButton = ({
  label,
  onPress,
  btnStyle,
  labelStyle,
}: {
  label: string;
  onPress: () => void;
  btnStyle?: any;
  labelStyle?: any;
}) => (
  <Pressable style={[style.appBtn, btnStyle]} onPress={onPress}>
    <Text style={[style.appBtnLabel, labelStyle]}>{label}</Text>
  </Pressable>
);

export const ImageButton = ({ image, onPress, btnStyle, imgStyle }: any) => {
  return (
    <Pressable style={[style.imgBtn, btnStyle]} onPress={onPress}>
      <Image
        style={[style.img, imgStyle]}
        resizeMode="contain"
        source={image}
      />
    </Pressable>
  );
};

const style = StyleSheet.create({
  appBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.primaryColor,
    paddingVertical: vh(17),
    borderRadius: 10,
  },
  appBtnLabel: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: FONT_SIZE.medium,
    color: COLOR.white,
    lineHeight: vw(19),
  },
  imgBtn: {
    marginHorizontal: vw(7),
  },
  img: {
    height: vw(54),
    width: vw(54),
  },
  textBtn: {
    alignSelf: "baseline",
  },
  textBtnLabel: {
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: FONT_SIZE.small,
    color: COLOR.skyBlue,
    lineHeight: vw(26),
  },
});
