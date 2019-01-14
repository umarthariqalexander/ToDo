import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import Create from './screens/Create';

import Navigator from './config/routes';

EStyleSheet.build({
  $primaryColor: '#562a4e',
  $StatusBarColor: '#562a4e',
  $headerColor: '#5D3055',
  $CreateBtnColor: '#613458',
  $white: '#FFFFFF',
  $borderColor: '#9B9B9B',
  $Grey80: '#CCCCCC',
  // $outline: 1,
});

export default () => <Navigator />;
