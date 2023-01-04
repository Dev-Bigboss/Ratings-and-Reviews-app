import { createStackNavigator } from 'react-navigation-stack'; 
import Header from '../shared/header';
import About from '../screens/About';


const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
      headerTitle: () => <Header navigation={navigation} title='About GameZone' />
      }
    }
  },
}
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#ee1', height: 60}
  }
});

export default AboutStack;