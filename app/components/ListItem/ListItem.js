import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import ListCard from './ListCard';
import Separator from './Separator';
import styles from './styles';

const ListItem = ({
  reminderTitle, reminderTime, reminderDate, snoozeType,
}) => (
  <ListCard>
    <View style={styles.titleContainer}>
      <View style={styles.reminderTitleWrapper}>
        <Text style={styles.reminderTitle}>{reminderTitle}</Text>
      </View>
      <View style={styles.reminderTitleIcon}>
        <Icon name="alarm-check" size={30} color="#562a4e" />
      </View>
    </View>
    <Separator />
    <View style={styles.dateAndTimeContainer}>
      <View style={styles.itemContainer}>
        <View>
          <Icon name="alarm-check" size={20} color="#9B9B9B" />
        </View>
        <View style={styles.reminderTimeWrapper}>
          <Text style={styles.reminderTime}>{reminderTime}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <FontAwesomeIcon name="calendar" size={15} color="#9B9B9B" />
        </View>
        <View style={styles.reminderCalendarWrapper}>
          <Text style={styles.reminderTime}>{reminderDate}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Icon name="alarm-check" size={20} color="#9B9B9B" />
        </View>
        <View style={styles.reminderTimeWrapper}>
          <Text style={styles.reminderTime}>{snoozeType}</Text>
        </View>
      </View>
    </View>
  </ListCard>
);

ListItem.propTypes = {
  reminderTitle: PropTypes.string,
  reminderTime: PropTypes.string,
  reminderDate: PropTypes.string,
  snoozeType: PropTypes.string,
};

export default ListItem;
