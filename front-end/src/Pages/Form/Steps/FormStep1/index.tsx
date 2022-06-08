import React from 'react';
import {Formik, Form} from 'formik';
import Title from '../../components/Title';
import {Flex, Grid} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {stepOneValidate} from '../../validation';
import MyInput from '../../../../components/Input';
import MySelect from '../../../../components/Select';
import {useFormContext} from '../../../../contexts/FormContext';
import {formatCPF, numberPhone} from '../../../../utils/regexInput';
import {maxInputDate, minInputDate} from '../../../../utils/minMaxDate';
import GroupButtonLeftRight from '../../../../components/GroupButtonLeftRight';

const FormStep1: React.FC = () => {
  const {nextStep, dataForm, bloodType, sign, dataFormStep} = useFormContext();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    cpf: '',
    data_nascimento: '',
    signo: '',
    tipo_sanguineo: '',
    email: '',
    telefone: '',
  };

  return (
    <Formik
      initialValues={
        !!dataFormStep.stepOne.submited ?
        dataFormStep.stepOne :
        initialValues
      }
      onSubmit={(values) => {
        nextStep();
        dataForm(values, 'stepOne');
      }}
      validationSchema={stepOneValidate}
      validateOnBlur
    >
      {({setFieldValue}:any ) => (
        <Form>
          <Flex flexDirection={'column'} gap={2}
            paddingX={['0', '0', '10', '32']}
            paddingBottom={'12'}
          >
            <Title>Dados Pessoais</Title>
            <MyInput _label='Nome' nameID='name'
              placeholder='Nome'
            />
            <Grid templateColumns={['1fr', '1fr 1fr']}
              gap={4}
            >
              <MyInput _label='CPF' nameID='cpf'
                onChange={(value:any)=>
                  setFieldValue('cpf', formatCPF(value.target.value))}
                placeholder='000.000.000-00'
              />
              <MyInput _label='Data de Nascimento'
                type={'date'}
                max={maxInputDate}
                min={minInputDate}
                nameID='data_nascimento'
              />
              <MySelect _label='Signo'
                nameID="signo"
                options={sign}
              />
              <MySelect _label='Tipo Sanguineo'
                nameID="tipo_sanguineo"
                options={bloodType}
              />
              <MyInput _label='E-mail'
                nameID='email'
                placeholder='example@example.com'
              />
              <MyInput _label='Telefone'
                nameID='telefone'
                onChange={(value:any)=>
                  setFieldValue('telefone', numberPhone(value.target.value))}
                placeholder='(00) 00000-0000'
              />
            </Grid>
          </Flex>
          <GroupButtonLeftRight
            labelLeft='Voltar'
            labelRight='Próximo'
            onClickLeft={()=>navigate('/')}
            typeButtonRight='submit'
            _sizeButton='md'
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormStep1;
