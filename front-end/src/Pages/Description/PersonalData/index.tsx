import React from 'react';
import {headerName, formatDate, maskedPhone, maskedCPF} from '../../../utils';
import {Text, Flex, Box, Divider} from '@chakra-ui/react';
import {useGlobalContext} from '../../../contexts/GlobalContext';
import BoxData from '../components/BoxData';

const PersonalData: React.FC = () => {
  const {PersonDescription} = useGlobalContext();

  return (
    <>
      <Text textStyle={'h1'} marginTop={88}
        marginBottom={'36px'}>
        {headerName(PersonDescription?.name)}
      </Text>
      <Box display={'flex'} flexDirection={'column'}
        gap={['2']} paddingBottom={'26px'}>
        <BoxData _label={'Nome'}
          _value= {PersonDescription?.name}
        />
        <Flex flexDirection={['column', 'row']}
          justifyContent={'space-between'}
          gap={['2', '0']}>
          <BoxData _label={'CPF'}
            _value={maskedCPF(PersonDescription?.cpf)}
          />
          <BoxData _label={'Data de Nascimento'}
            _value={ formatDate(PersonDescription?.data_nascimento?.toString())}
          />
          <BoxData _label={'Signo'}
            _value= {PersonDescription?.signo}
          />
        </Flex>
        <BoxData _label={'Tipo Sanguíneo'}
          _value= {PersonDescription?.tipo_sanguineo}
        />
        <Flex gap={['2']}
          flexDirection={['column', 'row']}
          justifyContent={'space-between'}>
          <BoxData _label={'E-mail'}
            _value= {PersonDescription?.email}
          />
          <BoxData _label={'E-Telefone'}
            _value= {maskedPhone(PersonDescription?.telefone)}
          />
        </Flex>
      </Box>
      <Divider bg={'#DEDDDD'}/>
    </>
  );
};

export default React.memo(PersonalData);
