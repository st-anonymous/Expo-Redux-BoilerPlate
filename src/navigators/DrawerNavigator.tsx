import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import Settings from '../screens/Settings';
import { StyleSheet } from 'react-native';
import { config } from '@gluestack-ui/config';

const Drawer = createDrawerNavigator();

const colors = config.tokens.colors;

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: '',
        headerStyle: styles.header,
        headerTintColor: colors.purple900,
        drawerStyle: styles.drawer,
        drawerActiveBackgroundColor: colors.purple300,
        drawerActiveTintColor: colors.purple900,
      }}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Wallet' component={Wallet} />
      <Drawer.Screen name='Settings' component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: colors.purple300,
    elevation: 1,
  },
  drawer: {
    padding: 20,
    height: '75%',
    borderRadius: 30,
  },
});
