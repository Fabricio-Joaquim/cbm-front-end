import React from 'react';
import {FieldArray, useFormikContext} from 'formik';
import {BsPlusCircle} from 'react-icons/bs';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import MyInput from '../../../../../components/Input';
import MyRadio from '../../../../../components/Radio';
import {Flex, Text, Box, Grid, GridItem} from '@chakra-ui/react';

interface dataValue{
  empresa: string;
  cargo: string;
  tempo: string;
  sua_empresa_atual: string;
}
interface IValues{
  experiencia: dataValue[]
}

const Experience:React.FC = () => {
  const {values}:{values:IValues} = useFormikContext();
  const RadioOptions = [
    {label: 'Sim', value: 'true'},
    {label: 'Não', value: 'false'},
  ];

  const initialValueExperience = {
    empresa: '',
    tempo: '',
    cargo: '',
    sua_empresa_atual: '',
  };

  return (
    <FieldArray
      name="experiencia"
      render={(arrayHelpers) => (
        <Box paddingBottom={'12'} >
          <Flex justifyContent={'space-between'}
            alignItems={'center'} verticalAlign={'center'}>
            <Text>Experiência</Text> <BsPlusCircle
              onClick={() =>
                arrayHelpers.push(initialValueExperience)}
              cursor={'pointer'}
            />
          </Flex>
          <Flex flexDirection={'column'} gap={'3'}>
            {values?.experiencia.map((_:any, index:any) => (
              <React.Fragment
                key={index}>
                {!!index && <Flex justifyContent={'flex-end'}
                  alignItems={'center'} verticalAlign={'center'}>
                  <AiOutlineMinusCircle
                    onClick={() => arrayHelpers.remove(index)}
                    cursor={'pointer'}
                  />
                </Flex>}
                <Box
                  border={'2px solid #D9D9D9'}
                  borderRadius={'8px'}
                  padding={'1rem'}
                >
                  <MyInput _label='Empresa'
                    nameID={`experiencia[${index}].empresa`}
                    placeholder={'Ex:CBM-SE'}
                  />
                  <MyInput _label='Cargo'
                    nameID={`experiencia[${index}].cargo`}
                    placeholder={'Ex:Desenvolvedor Front-End'}
                  />
                  <Grid templateColumns={['1fr', '1fr 1fr']}
                  >
                    <GridItem>
                      <MyInput _label='Tempo de Serviço'
                        nameID={`experiencia[${index}].tempo`}
                        placeholder={'Ex:1 mês'}
                      />
                    </GridItem>
                    <GridItem justifySelf={'center'}>
                      <MyRadio
                        _label='É seu emprego atual?'
                        nameID={
                          `experiencia[${index}].sua_empresa_atual`
                        }
                        options={RadioOptions}
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </React.Fragment>
            ))}
          </Flex>
        </Box>
      )}
    />
  );
};

export default Experience;
