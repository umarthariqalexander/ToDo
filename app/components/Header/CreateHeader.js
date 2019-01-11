import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';
import HeaderContainer from './HeaderContainer';

const ICON_SIZE = 25;


const CreateHeader = ({ onCloseIconPress, onCreateIconPress }) => (
  <HeaderContainer>
    <TouchableOpacity onPress={onCloseIconPress} style={styles.menuIcon}>
      <Icon name="close" size={ICON_SIZE} color="#FFF" />
    </TouchableOpacity>
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>Create Reminder</Text>
    </View>
    <TouchableOpacity onPress={onCreateIconPress} style={styles.optionsIcon}>
      <Icon name="check" size={ICON_SIZE} color="#FFF" />
    </TouchableOpacity>
  </HeaderContainer>
);

CreateHeader.propTypes = {
  onCloseIconPress: PropTypes.func,
  onCreateIconPress: PropTypes.func,
};

export default CreateHeader;
