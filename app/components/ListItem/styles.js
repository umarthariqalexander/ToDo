import EStyleSheet from 'react-native-extended-stylesheet';
// import { Dimensions } from 'react-native';

// const deviceWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  cardContainer: {
    flex: 1,
    marginHorizontal: 8,
    alignSelf: 'stretch',
    backgroundColor: '$white',
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderRadius: 2,
    borderColor: '$Gray80',
    elevation: 10, // android shadow
    shadowOffset: { width: 5, height: 10 }, // ios
    shadowColor: '$Gray80', // ios
    shadowOpacity: 0.5, // ios
    shadowRadius: 5, // ios
    marginBottom: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    // flex: 1,
    // alignSelf: 'stretch',
  },
  reminderTitleWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  reminderTitle: {
    fontSize: 24,
  },
  reminderTitleIcon: {
    position: 'absolute',
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
