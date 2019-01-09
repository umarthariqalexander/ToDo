import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#562a4e',
  $StatusBarColor: '#562a4e',
  $headerColor: '#5D3055',
  $CreateBtnColor: '#613458',
});

export default () => <Home />;
