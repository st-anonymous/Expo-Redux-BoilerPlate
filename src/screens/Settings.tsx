import React from 'react';
import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/reducers/userSlice';
import { config } from '@gluestack-ui/config';
import i18n from '../languages';

const colors = config.tokens.colors;

const Settings = () => {
  const dispatch = useDispatch();
  const HandleLogout = () => {
    dispatch(removeUser());
  };
  return (
    <Box alignItems='center' justifyContent='center' h={'$full'}>
      <Text size={'5xl'}>Settings</Text>
      <Text size={'xl'}>{`${i18n.t('common.welcome')} ${i18n.t(
        'common.name.lastName'
      )}`}</Text>
      <Button bgColor={colors.purple800} onPress={HandleLogout}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </Box>
  );
};

export default Settings;
