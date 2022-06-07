import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContext';
import {Text, Flex, Box, Divider} from '@chakra-ui/react';
const Experience: React.FC = () => {
  const {PersonDescription} = useGlobalContext();

  return (
    <>
      <Box display={'flex'} flexDirection={'column'}
        gap={'5'} padding={'20px 0'}>
        <Text textStyle={'h3'}>Experiência</Text>
        {
          PersonDescription?.experiencia?.map(
              (experiencia: any, index:number) => {
                return (
                  <Flex key={index} gap={'1'} flexDirection={'column'}>
                    <Box display={'flex'}>
                      <Text textStyle={'span'}>
                  Empresa:
                      </Text>
                      {experiencia?.empresa}
                    </Box>
                    <Box display={'flex'}>
                      <Text textStyle={'span'}>
                    Cargo:
                      </Text>
                      {experiencia?.cargo}
                    </Box>
                    <Box display={'flex'}>
                      <Text textStyle={'span'}>
                    Tempo:
                      </Text>
                      {experiencia?.sua_empresa_atual?
                      'Empresa atual': experiencia?.tempo}
                    </Box>
                  </Flex>
                );
              })}
      </Box>
      <Divider bg={'#DEDDDD'}/>
    </>

  );
};

export default Experience;
