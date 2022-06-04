import React from 'react';
import {Flex, Text, Box} from '@chakra-ui/react';
import {BsPlusCircle} from 'react-icons/bs';
import {Formik, Form, FieldArray} from 'formik';
import MyInput from '../../../components/Input';
import {AiOutlineMinusCircle} from 'react-icons/ai';

export const FormStep2: React.FC = () => {
  const initialValues = {formacao: [{instituicao: '', curso: ''}],
    competencia: ['']};
  return (
    <Box w={'full'}>
      <Text textAlign={'center'}>Experiência</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={(values:any) =>
          alert(JSON.stringify(values, null, 2))
        }
        render={({values}) => (
          <Form>
            <FieldArray
              name="formacao"
              render={(arrayHelpers) => (
                <>
                  <Flex justifyContent={'space-between'}
                    alignItems={'center'} verticalAlign={'center'}>
                    <Text>Formação</Text> <BsPlusCircle
                      onClick={() =>
                        arrayHelpers.push({instituicao: '', curso: ''})}
                      cursor={'pointer'}
                    />
                  </Flex>
                  <Flex flexDirection={'column'} gap={'3'}>
                    {values.formacao.map((_, index) => (
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
                </>
              )}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </Box>
  );
};

export default FormStep2;
