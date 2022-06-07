import React from 'react';
import {headerName, formatDate, maskedPhone, maskedCPF} from '../../../utils';
import {Text, Flex, Box, Divider} from '@chakra-ui/react';
import {useGlobalContext} from '../../../contexts/GlobalContext';

const PersonalData: React.FC = () => {
  const {PersonDescription} = useGlobalContext();

  return (
    <>
      <Text textStyle={'h1'} marginTop={88} marginBottom={'36px'}>
        {headerName(PersonDescription?.name)}
      </Text>
      <Box display={'flex'} flexDirection={'column'} gap={'2'}
        paddingBottom={'26px'}>
        <Flex>
          <Text textStyle={'span'}>
      Nome:
          </Text>
          {PersonDescription?.name}
        </Flex>
        <Flex justifyContent={'space-between'}>
          <Box display={'flex'} gap={1}>
            <Text textStyle={'span'}>
      CPF:
            </Text>
            {maskedCPF(PersonDescription?.cpf)}
          </Box>
          <Box display={'flex'} gap={1}>
            <Text textStyle={'span'}>
      Data de Nascimento:
            </Text>
            { formatDate(PersonDescription?.data_nascimento)}
          </Box>
          <Box display={'flex'} gap={1}>
            <Text textStyle={'span'}>
      Signo:
            </Text>
            {PersonDescription?.signo}
          </Box>
        </Flex>
        <Box display={'flex'} gap={1}>
          <Text textStyle={'span'}>
    Tipo Sanguíneo:
          </Text>
          <Text textStyle={'spanSub'}>
            {PersonDescription?.tipo_sanguineo}
          </Text>
        </Box>
        <Flex justifyContent={'space-between'}>
          <Box display={'flex'} gap={1}>
            <Text textStyle={'span'}>
    Email:
            </Text>
            { PersonDescription?.email}
          </Box>
          <Box display={'flex'} gap={1}>
            <Text textStyle={'span'}>
    Telefone:
            </Text>
            {maskedPhone(PersonDescription?.telefone)}
          </Box>
        </Flex>
      </Box>
      <Divider bg={'#DEDDDD'}/>
    </>
  );
};

export default PersonalData;
