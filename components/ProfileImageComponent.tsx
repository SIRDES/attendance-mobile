import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { COLOR, FONT_FAMILY, FONT_SIZE, vh, vw } from "../Theme";
import { ImagePath } from "@/constants/ImagePath";

export const ProfileImageComponent = ({ image, name, viewStyle }: any) => (
  <View style={[style.container, viewStyle]}>
    <View style={style.imgContainer}>
      {/* <UserImage source={image} imgStyle={style.img} /> */}
      <Image
        source={image ? image : ImagePath.profilePlaceholder}
        style={[style.img, style.image]}
      />
    </View>
    <Text style={style.name}>{name}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLOR.primaryColor,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: vw(30),
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: vw(100),
    height: vw(100),
    borderWidth: vw(1),
    borderRadius: vw(50),
    borderColor: COLOR.skyBlue,
  },
  img: {
    width: vw(92),
    height: vw(92),
    borderRadius: vw(46),
  },
  name: {
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: FONT_SIZE.large,
    lineHeight: vw(26),
    color: COLOR.white,
    marginVertical: vh(10),
  },
  image: {
    height: vw(100),
    width: vw(100),
    borderRadius: vw(50),
  },
});
