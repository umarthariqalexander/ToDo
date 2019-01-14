import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Create from '../screens/Create';


export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Create: {
    screen: Create,
    navigationOptions: {
      header: () => null,
    },
  },
});
