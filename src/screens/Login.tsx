import React from 'react';
import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/reducers/userSlice';
import { config } from '@gluestack-ui/config';

const colors = config.tokens.colors;

const Login = () => {
  const dispatch = useDispatch();
  const HandleLogin = () => {
    dispatch(updateUser({ isLoggedIn: true }));
  };

  return (
    <Box
      alignItems='center'
      justifyContent='center'
      h={'$full'}
      bgColor={'$purple300'}>
      <Text size={'5xl'}>Login</Text>
      <Button bgColor={colors.purple800} onPress={HandleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Box>
  );
};

export default Login;
