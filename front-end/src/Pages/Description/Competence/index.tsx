import React from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContext';
import {Text, Flex, Box} from '@chakra-ui/react';

const Competence: React.FC = () => {
  const {PersonDescription} = useGlobalContext();

  return (
    <Box display={'flex'} flexDirection={'column'}
      gap={'2'} padding={'20px 0'}>
      <Text textStyle={'h3'}>Competências</Text>
      <Flex gap={'2'}>
        {PersonDescription?.competencias?.map(
            (competencia: string, index:number) => {
              return (
                <Box key={index}bg={'#9BD26F'} border={'1px solid #EFEFEF'}
                  borderRadius={'11px'} padding={'5px 10px'} fontSize={'14px'}
                  fontWeight={'400'} lineHeight={'16px'} color={'#FFFFFF'}
                >
                  {competencia}
                </Box>
              );
            })
        }
      </Flex>
    </Box>
  );
};

export default Competence;
