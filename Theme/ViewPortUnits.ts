import { Dimensions } from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

export const vw = (number: number) =>
  Dimensions.get("window").width < 425
    ? Dimensions.get("window").width * (number / 375)
    : Dimensions.get("window").width * (number / 500);

export const vh = (number: number) =>
  Dimensions.get("window").height < 767
    ? Dimensions.get("window").height * (number / 667)
    : Dimensions.get("window").height * (number / 800);

export const vmin = (number: number) =>
  Math.min(
    Dimensions.get("window").width * (number / 100),
    Dimensions.get("window").height * (number / 100)
  );

export const vmax = (number: number) =>
  Math.max(
    Dimensions.get("window").width * (number / 100),
    Dimensions.get("window").height * (number / 100)
  );
