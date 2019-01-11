import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const HeaderContainer = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

HeaderContainer.propTypes = {
  children: PropTypes.any,
};

export default HeaderContainer;
