import React from 'react';
import { TouchableOpacity } from 'react-native';
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const CreateButton = () => (
  <TouchableOpacity style={styles.createBtnContainer} activeOpacity={0.9}>
    <PlusIcon name="plus" size={30} color="#FFF" />
  </TouchableOpacity>
);

export default CreateButton;
