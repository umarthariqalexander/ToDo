import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $primaryColor: '#562a4e',
  $StatusBarColor: '#562a4e',
  $headerColor: '#5D3055',
  $CreateBtnColor: '#613458',
  $white: '#FFFFFF',
  $borderColor: '#9B9B9B',
  $Grey80: '#CCCCCC',
  $white: '#FFFFFF',
  // $outline: 1,
});


export default () => <Provider store={store}><Navigator /></Provider>;
