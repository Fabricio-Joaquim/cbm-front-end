import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContext';
import {Text, Flex, Box, Divider} from '@chakra-ui/react';

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
              <Box display={'flex'}>
                <Text textStyle={'span'}>
                Instituição:
                </Text>
                {formacao?.instituicao}
              </Box>
              <Box display={'flex'}>
                <Text textStyle={'span'}>
                  Curso:
                </Text>
                {formacao?.curso}
              </Box>
            </Flex>
          );
        })}
      </Box>
      <Divider bg={'#DEDDDD'}/>
    </>

  );
};

export default Formation;
