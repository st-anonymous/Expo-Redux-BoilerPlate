import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { RootStateType } from '../store/store';
import { UserType } from '../store/reducers/userSlice';

const AppNavigator = () => {
  const user = useSelector<RootStateType, UserType>((state) => {
    return state.user;
  });
  return user.isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
