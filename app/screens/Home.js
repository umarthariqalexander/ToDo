import React from 'react';
import {
  View, Text, StatusBar, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { HomeHeader } from '../components/Header';
import { ListItem } from '../components/ListItem';
import { CreateButton } from '../components/Button';
import { getRemindersList } from '../actions/HomeActions';
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
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    remindersList: PropTypes.array,
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getRemindersList());
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.remindersList !== prevState.remindersList) {
  //     return { remindersList: nextProps.remindersList };
  //   }
  //   return null;
  // }

  onMenuIconPress = () => {
    console.log('menu icon pressed');
  }

  onOptionIconPress = () => {
    console.log('options icon pressed');
  }

  onCreateButtonPress = () => {
    // console.log('Create Button pressed');
    this.props.navigation.navigate('Create');
  }

  render() {
    const { remindersList } = this.props;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <HomeHeader onMenuIconPress={this.onMenuIconPress} onOptionIconPress={this.onOptionIconPress} />
        <View style={{ paddingTop: 100 }} />
        <FlatList
          style={{ alignSelf: 'stretch' }}
          data={remindersList}
          renderItem={({ item }) => <ListItem reminderTitle={item.reminderTitle} reminderTime={item.reminderTime} reminderDate={item.reminderDate} snoozeType={item.snoozeType} />}
          keyExtractor={({ reminderTitle }) => reminderTitle}
        />
        <CreateButton onPress={this.onCreateButtonPress} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  remindersList: state.home.remindersList,
});


export default connect(mapStateToProps)(Home);
