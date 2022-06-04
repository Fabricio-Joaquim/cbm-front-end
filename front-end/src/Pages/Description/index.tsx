import React from 'react';
import {useGlobalContext} from '../../contexts/globalContext';
import {Text, Flex, Box, Divider} from '@chakra-ui/react';
import {headerName, formatDate, maskedPhone, maskedCPF} from '../../utils';

const Description: React.FC = () => {
  const {PersonDescription} = useGlobalContext();
  return (
    <Flex
      width={' 998px'}
      // height= {'1296px'}
      flexDirection={'column'} padding={'0 98px'}>

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
          <Box display={'flex'}>
            <Text textStyle={'span'}>
          CPF:
            </Text>
            {maskedCPF(PersonDescription?.cpf)}
          </Box>
          <Box display={'flex'}>
            <Text textStyle={'span'}>
          Data de Nascimento:
            </Text>
            { formatDate(PersonDescription?.data_nascimento)}
          </Box>
          <Box display={'flex'}>
            <Text textStyle={'span'}>
          Signo:
            </Text>
            {PersonDescription?.signo}
          </Box>
        </Flex>
        <Box display={'flex'}>
          <Text textStyle={'span'}>
        Tipo Sanguíneo:
          </Text>
          { PersonDescription?.tipo_sanguineo}
        </Box>
        <Flex justifyContent={'space-between'}>
          <Box display={'flex'}>
            <Text textStyle={'span'}>
        Email:
            </Text>
            {PersonDescription?.email}
          </Box>
          <Box display={'flex'}>
            <Text textStyle={'span'}>
        Telefone:
            </Text>
            {maskedPhone(PersonDescription?.telefone)}
          </Box>
        </Flex>
      </Box>
      <Divider bg={'#DEDDDD'}/>
      <Box display={'flex'} flexDirection={'column'}
        gap={'2'} padding={'20px 0'}>
        <Text textStyle={'h3'}>Resumo</Text>
        <Text>
          {PersonDescription?.resumo}
        </Text>
      </Box>
      <Divider bg={'#DEDDDD'}/>
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
      <Box display={'flex'} flexDirection={'column'}
        gap={'2'} padding={'20px 0'}>
        <Text textStyle={'h3'}>Competências</Text>
        <Flex gap={'2'}>
          {PersonDescription?.competencias?.map(
              (competencia: any, index:number) => {
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
    </Flex>
  );
};
/*
font-weight: 400;
font-size: 14px;
line-height: 16px;
*/
export default Description;
