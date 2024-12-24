import React from "react";
import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { COLOR, FONT_FAMILY, FONT_SIZE, vh, vw } from "../Theme";
import { Ionicons } from "@expo/vector-icons";
export const ListItem = ({
  item,
  image,
  label,
  onPress,
  labelStyle,
  imgStyle,
  rightIconStyle,
  hasLine,
  containerStyle,
  rightIconImg,
  onPressRightIcon,
  showBadge,
}: any) => {
  return (
    <Pressable onPress={onPress}>
      {hasLine && <View style={style.line} />}
      <View style={[style.innerContainer, containerStyle]}>
        <View style={style.rightContainer}>
          <View>
            {showBadge ? <View style={style.badge} /> : null}
            {/* <Image
              source={item ? item.image : image}
              resizeMode="contain"
              style={[style.img, imgStyle]}
            /> */}
            <Ionicons
              name={item ? item.icon : image}
              size={vw(20)}
              color={COLOR.headingColor}
              style={[style.img, imgStyle]}
            />
          </View>
          <Text style={[style.label, labelStyle]}>
            {item ? item.label : label}
          </Text>
        </View>
        <Ionicons
          name={rightIconImg ? rightIconImg : "chevron-forward"}
          size={24}
          color={COLOR.headingColor}
          style={[style.rightIcon, rightIconStyle]}
        />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  line: {
    backgroundColor: COLOR.bgColor,
    height: vh(1),
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: vh(15),
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: vw(40),
    width: vw(40),
  },
  label: {
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: FONT_SIZE.medium,
    color: COLOR.headingColor,
    marginLeft: vw(14),
  },
  rightIcon: {
    height: vw(24),
    width: vw(24),
  },
  badge: {
    position: "absolute",
    backgroundColor: COLOR.skyBlue,
    height: 10,
    width: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
    right: -vw(1),
    top: vh(1),
    zIndex: 9,
  },
});
