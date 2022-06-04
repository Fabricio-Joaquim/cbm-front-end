import React from 'react';
import {Form, Formik} from 'formik';
import MyInput from '../../../components/Input';
import {Box, Heading, Flex, useDisclosure} from '@chakra-ui/react';
import Button from '../../../components/Button';
import MyModal from '../../../components/Modal';

const FormStep3: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  React.useEffect(() => {
  }, []);

  return (
    <>
      <Box w={'full'}>
        <Heading textAlign={'center'}>Resumo</Heading>
        <Formik
          initialValues={{
            sobre: '',
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <MyInput
                _label='Sobre'
                nameID={'sobre'}
                placeholder={'Sobre mim...'}
                _typeInput={'TextArea'}
                height={'10rem'}
                resize={'none'}
              />
              <Flex w={'full'}
                marginTop={'3rem'}
                justifyContent={'space-around'}>
                <Button color='Gray'>Voltar</Button>
                <Button color='Orange'
                  onClick={onOpen} type='submit'>Salvar</Button>
              </Flex>
            </Form>
          )}
        </Formik>

      </Box>
      <MyModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default FormStep3;
