import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';


const colorStyles = EStyleSheet.create({
  $activeUnderLineColor: '$headerColor',
  $underLineColor: '$Grey80',
});

class InputText extends React.Component {
    state = {
      isFocused: false,
      textCount: 0,
    };

    handleFocus = (event) => {
      this.setState({ isFocused: true });
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }

    onChangeText = (text) => {
      this.setState({ textCount: text.length });
      this.props.onChangeText(text);
    }

    render() {
      const { isFocused, textCount } = this.state;
      const {
        inputTextTitle, maxLength, showTextCounter, inputTextContainerStyles,
      } = this.props;
      const textInputContainerCustomStyles = [styles.inputTextContainer, inputTextContainerStyles];
      return (
        <View style={textInputContainerCustomStyles}>
          <View style={styles.inputTitleWrapper}>
            <Text style={styles.inputTitleText}>{inputTextTitle}</Text>
          </View>
          <TextInput
            {...this.props}
            style={styles.textInputStyles}
            maxLength={maxLength}
            onFocus={this.handleFocus}
            selectionColor={colorStyles.$activeUnderLineColor}
            underlineColorAndroid={isFocused ? colorStyles.$activeUnderLineColor : colorStyles.$underLineColor}
            onChangeText={this.onChangeText}
          />
          {showTextCounter && (
          <View style={styles.textCountContainer}>
            <Text style={styles.textCountText}>{textCount}</Text>
            <Text style={styles.textCountText}>/</Text>
            <Text style={styles.textCountText}>{maxLength}</Text>
          </View>
          )}
        </View>
      );
    }
}

InputText.propTypes = {
  maxLength: PropTypes.number,
  inputTextTitle: PropTypes.string,
  showTextCounter: PropTypes.bool,
  inputTextContainerStyles: PropTypes.object,
  onChangeText: PropTypes.func,
};

export default InputText;
