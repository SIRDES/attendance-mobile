import {StyleSheet} from 'react-native';
import {COLOR} from './Colors';
import {FONT_FAMILY, FONT_SIZE} from './Fonts';
import {vh, vw} from './ViewPortUnits';

export const styles = StyleSheet.create({
  headerCustomStyle: {
    backgroundColor: COLOR.bgColor,
    borderWidth: 0,
    elevation: 0,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  darkHeader: {
    backgroundColor: COLOR.primaryColor,
    borderWidth: 0,
    elevation: 0,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  leftImg: {
    height: vw(24),
    width: vw(24),
  },
  leftBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(8),
    backgroundColor: COLOR.white,
    borderRadius: 10,
    marginLeft: vw(20),
  },
  heading: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: FONT_SIZE.vLarge,
    lineHeight: vw(45),
    color: COLOR.headingColor,
  },
  subHeading: {
    fontFamily: FONT_FAMILY.PoppinsRegular,
    fontSize: FONT_SIZE.medium,
    lineHeight: vh(26),
    color: COLOR.primaryColor,
  },
  textBtn: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: FONT_SIZE.medium,
    color: COLOR.skyBlue,
  },
  menuBtn: {
    backgroundColor: COLOR.primaryColor,
  },
  darkHeaderImg: {
    height: vw(24),
    width: vw(24),
    tintColor: COLOR.bgColor,
  },
  darkHeaderBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(8),
    backgroundColor: COLOR.darkHeaderBtnColor,
    borderRadius: 10,
    marginLeft: vw(20),
  },
  darkHeaderRightBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(8),
    backgroundColor: COLOR.darkHeaderBtnColor,
    borderRadius: 10,
    marginRight: vw(20),
  },
  searchLeftBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(8),
    backgroundColor: COLOR.white,
    borderRadius: 10,
  },
  flatlist: {minHeight: '100%'},
});
