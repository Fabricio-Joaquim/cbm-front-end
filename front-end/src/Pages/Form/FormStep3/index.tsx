import React from 'react';
import {Form, Formik} from 'formik';
import MyInput from '../../../components/Input';
import {Box, Heading, Flex, useDisclosure} from '@chakra-ui/react';
import Button from '../../../components/Button';
import MyModal from '../../../components/Modal';
import {useFormContext} from '../../../contexts/FormContext';
import {stepThreeValidate} from '../validation';
const FormStep3: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const {nextStep, prevStep, dataFormStep, dataForm} = useFormContext();

  return (
    <>
      <Box w={'full'}>
        <Heading textAlign={'center'}>Resumo</Heading>
        <Formik
          validationSchema={stepThreeValidate}
          initialValues={
            dataFormStep.stepThree || {
              resumo: '',
            }}
          onSubmit={(values) => {
            nextStep();
            dataForm(values, 'stepThree');
            onOpen();
          }}
        >
          {({handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <MyInput
                _label='Sobre'
                nameID={'resumo'}
                placeholder={'Sobre mim...'}
                isTextArea
                height={'10rem'}
                resize={'none'}
              />
              <Flex w={'full'}
                marginTop={'3rem'}
                justifyContent={'space-around'}>
                <Button onClick={prevStep} color='Gray'>Voltar</Button>
                <Button color='Orange'
                  type='submit'>Salvar</Button>
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
