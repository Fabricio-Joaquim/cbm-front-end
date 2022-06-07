import React from 'react';
import Title from '../Title';
import {Form, Formik} from 'formik';
import MyInput from '../../../components/Input';
import MyModal from '../../../components/Modal';
import {stepThreeValidate} from '../validation';
import {Box, useDisclosure} from '@chakra-ui/react';
import {useFormContext} from '../../../contexts/FormContext';
import GroupButtonLeftRight from '../../../components/GroupButtonLeftRight';

const FormStep3: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const {nextStep, prevStep, dataForm} = useFormContext();

  return (
    <>
      <Box w={'full'}>
        <Title>Resumo</Title>
        <Formik
          validationSchema={stepThreeValidate}
          initialValues={
            {
              resumo: '',
            }}
          onSubmit={(values:{resumo:string}) => {
            nextStep();
            dataForm(values, 'stepThree');
            onOpen();
          }}
        >
          <>
            <Form>
              <Box paddingX={'32'}
                paddingBottom={'20'}>
                <MyInput
                  _label='Sobre'
                  nameID={'resumo'}
                  placeholder={'Sobre mim...'}
                  isTextArea
                  height={'10rem'}
                  resize={'none'}
                />
              </Box>
              <GroupButtonLeftRight
                labelLeft='Voltar'
                labelRight='Próximo'
                onClickLeft={prevStep}
                onClickNext={()=>{}}
                _sizeButton={'md'}
                typeButtonRight={'submit'}
              />
            </Form>
          </>
        </Formik>
      </Box>
      <MyModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default FormStep3;
