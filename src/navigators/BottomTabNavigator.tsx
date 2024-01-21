import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import MyTeam from '../screens/MyTeam';
import DrawerNavigator from './DrawerNavigator';
import { StyleSheet } from 'react-native';
import { config } from '@gluestack-ui/config';

const Tab = createBottomTabNavigator();

const colors = config.tokens.colors;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeDrawer'
      backBehavior='history'
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        tabBarActiveTintColor: colors.purple900,
        tabBarInactiveTintColor: colors.white,
        tabBarLabelStyle: styles.label,
      }}>
      <Tab.Screen name='MyTeam' component={MyTeam} />
      <Tab.Screen
        name='HomeDrawer'
        component={DrawerNavigator}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: colors.purple400,
    borderRadius: 30,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
  },
});
