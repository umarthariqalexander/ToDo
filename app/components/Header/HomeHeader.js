import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';
import HeaderContainer from './HeaderContainer';

const ICON_SIZE = 30;

const HomeHeader = ({ onMenuIconPress, onOptionIconPress }) => (
  <HeaderContainer>
    <TouchableOpacity onPress={onMenuIconPress} style={styles.menuIcon}>
      <Icon name="menu" size={ICON_SIZE} color="#FFF" />
    </TouchableOpacity>
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>Reminder List</Text>
    </View>
    <TouchableOpacity onPress={onOptionIconPress} style={styles.optionsIcon}>
      <Icon name="more-vert" size={ICON_SIZE - 3} color="#FFF" />
    </TouchableOpacity>
  </HeaderContainer>
);

HomeHeader.propTypes = {
  onMenuIconPress: PropTypes.func,
  onOptionIconPress: PropTypes.func,
};

export default HomeHeader;
