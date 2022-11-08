import {faHome, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contact from '../screens/Contact';
import HomeScreen from '../screens/HomeScreen';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: colors.primaryColor}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon color={color} icon={faHome} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon color={color} icon={faPhone} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
