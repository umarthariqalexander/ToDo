import React from 'react';
import { TouchableOpacity } from 'react-native';
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

const CreateButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.createBtnContainer} activeOpacity={0.9}>
    <PlusIcon name="plus" size={30} color="#FFF" />
  </TouchableOpacity>
);

CreateButton.propTypes = {
  onPress: PropTypes.func,
};

export default CreateButton;
