import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useInit from './src/hooks/useInit';
import AppNavigator from './src/navigators/AppNavigator';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  const { appIsReady, onLayoutRootView } = useInit();

  if (!appIsReady) return null;

  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <SafeAreaProvider>
          <StatusBar hidden />
          <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
  );
}
