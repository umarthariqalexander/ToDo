import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '$primaryColor',
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  menuIcon: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  headerTextContainer: {
    alignSelf: 'center',
    paddingLeft: 10,
    paddingBottom: 3,
  },
  headerText: {
    color: '$white',
    fontSize: 26,
  },
  optionsIcon: {
    position: 'absolute',
    paddingHorizontal: 10,
    right: 0,
    bottom: 0,
    paddingVertical: 15,
  },
});
