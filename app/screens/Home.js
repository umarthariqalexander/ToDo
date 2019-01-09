import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Header />
    <View>
      <Text>Hello Umar!!</Text>
    </View>
  </Container>
);
