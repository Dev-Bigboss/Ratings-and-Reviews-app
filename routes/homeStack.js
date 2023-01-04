import { createStackNavigator } from 'react-navigation-stack'; 
import Header from '../shared/header';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
      headerTitle: () => <Header navigation={navigation} title='GameZone' />
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
   
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#ee1', height: 60}
  }
});

export default HomeStack  ;