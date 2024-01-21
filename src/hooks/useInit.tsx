import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const useInit = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const initialAPICalls = async () => {
      SplashScreen.preventAutoHideAsync();
      try {
        // Handle all the initial API calls holding the splash screen...
        await new Promise((resolve) => setTimeout(resolve, 1000)); // for demo purpose
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsReady(true);
      }
    };
    initialAPICalls();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return { appIsReady, onLayoutRootView };
};

export default useInit;
