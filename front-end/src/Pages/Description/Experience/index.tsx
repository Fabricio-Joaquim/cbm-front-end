import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContext';
import {Text, Flex, Box, Divider} from '@chakra-ui/react';
import BoxData from '../components/BoxData';

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
                    <BoxData _label={'Empresa'}
                      _value= {experiencia?.empresa}
                    />
                    <BoxData _label={'Cargo'}
                      _value= {experiencia?.cargo}
                    />
                    <BoxData _label={'Tempo'}
                      _value= {experiencia?.sua_empresa_atual?
                        'Empresa atual': experiencia?.tempo}
                    />
                  </Flex>
                );
              })}
      </Box>
      <Divider bg={'#DEDDDD'}/>
    </>

  );
};

export default Experience;
