import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


// const closeIcon = (<Icon name="close" size={30} color="#FFF" />);
// const checkIcon = (<Icon name="check" size={30} color="#FFF" />);
// const snoozeIcon = (<Icon name="cached" size={30} color="#FFF" />);
// const calendarIcon = (<Icon1 name="calendar" size={30} color="grey" />);
// const alarmIcon = (<Icon2 name="alarm" size={30} color="#FFF" />);
// const alarmCheckIcon = (<Icon2 name="alarm-check" size={30} color="#FFF" />);
// const plusIconMC = (<Icon2 name="plus" size={30} color="#FFF" />);

class Home extends React.Component {
  onMenuIconPress = () => {
    console.log('menu icon pressed');
  }

  onOptionIconPress = () => {
    console.log('options icon pressed');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onMenuIconPress={this.onMenuIconPress} onOptionIconPress={this.onOptionIconPress} />
        <View>
          <Text>Hello Umar!!</Text>
        </View>
      </Container>
    );
  }
}

export default Home;
