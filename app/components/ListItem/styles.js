import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
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
    borderColor: '$Grey80',
    elevation: 2, // android shadow
    shadowOffset: { width: 5, height: 10 }, // ios
    shadowColor: '$Grey80', // ios
    shadowOpacity: 0.5, // ios
    shadowRadius: 5, // ios
    marginBottom: 25,
    marginTop: 5,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  dateAndTimeContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  reminderTitleWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  reminderTitle: {
    fontSize: 24,
    fontWeight: '300',
  },
  reminderTitleIcon: {
    position: 'absolute',
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  Separator: {
    backgroundColor: '$Grey80',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  reminderTimeWrapper: {
    marginLeft: 5,
  },
  reminderCalendarWrapper: {
    marginLeft: 5,
  },
  reminderTime: {
    color: '$Grey80',
    fontSize: 16,
  },
});
