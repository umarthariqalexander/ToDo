import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import ListCard from './ListCard';
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
  </ListCard>
);

ListItem.propTypes = {
  reminderTitle: PropTypes.string,
  reminderTime: PropTypes.string,
  reminderDate: PropTypes.string,
  snoozeType: PropTypes.string,
};

export default ListItem;
