import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContext';
import {Text, Box, Divider} from '@chakra-ui/react';

const About: React.FC = () => {
  const {PersonDescription} = useGlobalContext();
  return (
    <>
      <Box display={'flex'} flexDirection={'column'}
        gap={'2'} padding={'20px 0'}>
        <Text textStyle={'h3'}>Resumo</Text>
        <Text textAlign={'justify'}>
          {PersonDescription?.resumo}
        </Text>
      </Box>
      <Divider bg={'#DEDDDD'}/>
    </>

  );
};

export default About;
