import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CreateHeader } from '../components/Header';

class Create extends Component {
    onCloseIconPress = () => {
      console.log('onCloseIconPress');
    }

    onCreateIconPress = () => {
      console.log('onCreateIconPress');
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <CreateHeader onCreateIconPress={this.onCreateIconPress} onCloseIconPress={this.onCloseIconPress} />
        </View>
      );
    }
}

export default Create;
