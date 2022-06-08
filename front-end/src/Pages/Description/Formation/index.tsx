import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContext';
import {Text, Flex, Box, Divider} from '@chakra-ui/react';
import BoxData from '../components/BoxData';
const Formation: React.FC = () => {
  const {PersonDescription} = useGlobalContext();

  return (
    <>
      <Box display={'flex'} flexDirection={'column'}
        gap={'5'} padding={'20px 0'}>
        <Text textStyle={'h3'}>Formação</Text>
        {PersonDescription?.formacao?.map((formacao: any, index:number) => {
          return (
            <Flex key={index} gap={'1'} flexDirection={'column'}>
              <BoxData _label={'NoInstituiçãome'}
                _value= {formacao?.instituicao}
              />
              <BoxData _label={'Curso'}
                _value= {formacao?.curso}
              />
            </Flex>
          );
        })}
      </Box>
      <Divider bg={'#DEDDDD'}/>
    </>

  );
};

export default Formation;
