import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataToAsyncStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.warn(e);
  }
};

const getDataFromAsyncStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn(e);
  }
};

export { storeDataToAsyncStorage, getDataFromAsyncStorage };
