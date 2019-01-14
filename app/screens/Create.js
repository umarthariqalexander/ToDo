import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { CreateHeader } from '../components/Header';
import { InputText } from '../components/InputText';

class Create extends Component {
    static propTypes = {
      navigation: PropTypes.object,
    };

    onCloseIconPress = () => {
      this.props.navigation.goBack();
    }

    onCreateIconPress = () => {
      this.props.navigation.goBack();
    }

    onTextChange = (text) => {
      console.log(text);
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <CreateHeader onCreateIconPress={this.onCreateIconPress} onCloseIconPress={this.onCloseIconPress} />
          <View style={{ paddingTop: 100 }} />
          <InputText autoFocus showTextCounter onChangeText={this.onTextChange} inputTextTitle="Reminder Name" maxLength={30} placeholder="Reminder Title" inputTextContainerStyles={{ marginBottom: 10 }} />
          <InputText showTextCounter inputTextTitle="Reminder Notes" maxLength={40} placeholder="Reminder Notes" inputTextContainerStyles={{ marginBottom: 10 }} />
        </View>
      );
    }
}

export default Create;
