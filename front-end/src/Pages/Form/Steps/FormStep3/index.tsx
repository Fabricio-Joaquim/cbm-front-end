import React from 'react';
import {Form, Formik} from 'formik';
import Title from '../../components/Title';
import {useNavigate} from 'react-router-dom';
import MyInput from '../../../../components/Input';
import MyModal from '../../../../components/Modal';
import {stepThreeValidate} from '../../validation';
import {Box, useDisclosure, useToast} from '@chakra-ui/react';
import {useFormContext} from '../../../../contexts/FormContext';
import GroupButtonLeftRight from '../../../../components/GroupButtonLeftRight';
import {useGlobalContext} from '../../../../contexts/GlobalContext';

const FormStep3: React.FC = () => {
  const navigate = useNavigate();
  const {handlerCPF} = useGlobalContext();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();
  const {nextStep, prevStep, loadingForm, dataForm} = useFormContext();
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
          onSubmit={async (values:{resumo:string}) => {
            nextStep();
            const value =await dataForm(values, 'stepThree');

            if (!!value.cpf) {
              handlerCPF(value.cpf);
              return onOpen();
            }
            if (value.response.status === 0) {
              toast({
                title: 'Falha ao salvar dados',
                description: 'Falha no servidor',
                status: 'error',
                duration: 5000,
              });
              navigate('/');
            }
            if (value.response.status === 500) {
              toast({
                title: 'Falha ao salvar dados',
                description: 'CPF já cadastrado',
                status: 'error',
                duration: 5000,
              });
              navigate('/');
            }
          }}
        >
          <>
            <Form>
              <Box paddingX={['0', '32']}
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
                _sizeButton={'md'}
                typeButtonRight={'submit'}
                isLoading={loadingForm}
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
