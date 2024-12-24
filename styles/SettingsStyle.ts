import { COLOR, vw } from '@/Theme';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primaryColor,
    paddingTop: vw(50),
  },
  topContainer: {
    flex: 1,
    paddingHorizontal: vw(30),
  },
  label: {
    color: COLOR.white,
  },
  logoutIcon: {
    height: vw(24),
    width: vw(24),
    marginRight: vw(10),
  },
  logoutBtn: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: vw(4),
    marginVertical: vw(15),
    padding: vw(10),
  },
  line: {
    backgroundColor: COLOR.lightPrimaryTextClr,
    height: vw(1),
    marginHorizontal: vw(30),
    marginTop: vw(20),
    marginBottom: vw(15),
  },
  icon: {
    height: vw(24),
    width: vw(24),
    color: COLOR.white,
  },
});

export default style;
