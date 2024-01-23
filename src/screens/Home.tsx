import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import translate from '../languages';

const Home = () => {
  return (
    <Box alignItems='center' justifyContent='center' flex={1}>
      <Text size={'5xl'}>Home</Text>
      <Text size={'xl'}>{`${translate('common.welcome')} ${translate(
        'common.name.lastName'
      )}`}</Text>
    </Box>
  );
};

export default Home;
