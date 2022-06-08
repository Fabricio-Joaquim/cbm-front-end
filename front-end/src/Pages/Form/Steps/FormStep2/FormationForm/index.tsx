import React from 'react';
import {FieldArray} from 'formik';
import {BsPlusCircle} from 'react-icons/bs';
import {Box, Text, Flex} from '@chakra-ui/react';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import MyInput from '../../../../../components/Input';

const Formation: React.FC<any> = ({values}) => {
  return (
    <FieldArray
      name="formacao"
      render={({push, remove}) => (
        <Box paddingBottom={'12'}>
          <Flex justifyContent={'space-between'}
            alignItems={'center'} verticalAlign={'center'}>
            <Text>Formação</Text> <BsPlusCircle
              onClick={() =>
                push({instituicao: '', curso: ''})}
              cursor={'pointer'}
            />
          </Flex>
          <Flex flexDirection={'column'} gap={'3'}>
            {values?.formacao.map((_:any, index:number) => (
              <React.Fragment
                key={index}>
                {!!index && <Flex justifyContent={'flex-end'}
                  alignItems={'center'} verticalAlign={'center'}>
                  <AiOutlineMinusCircle
                    onClick={() => remove(index)}
                    cursor={'pointer'}
                  />
                </Flex>}
                <Box
                  border={'2px solid #D9D9D9'}
                  borderRadius={'8px'}
                  padding={'1rem'}
                >
                  <MyInput _label='Instituição'
                    nameID={`formacao[${index}].instituicao`}
                    placeholder={'Ex:Universidade Federal de Sergipe'}
                  />
                  <MyInput _label='Curso'
                    nameID={`formacao[${index}].curso`}
                    placeholder={'Ex:Ciência da Computação'}
                  />
                </Box>
              </React.Fragment>
            ))}
          </Flex>
        </Box>
      )}
    />
  );
};

export default Formation;
