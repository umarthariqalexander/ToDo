import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ListCard = ({ children }) => (
  <View style={styles.cardContainer}>
    {children}
  </View>
);

ListCard.propTypes = {
  children: PropTypes.any,
};

export default ListCard;
