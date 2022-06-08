import React from 'react';
import Title from '../../components/Title';
import {stepTwoValidate} from '../../validation';
import {Formik, Form} from 'formik';
import {useFormContext} from '../../../../contexts/FormContext';
import {Box} from '@chakra-ui/react';
import GroupButtonLeftRight from '../../../../components/GroupButtonLeftRight';
import Formation from './FormationForm';
import Experience from './ExperienceForm';
import Competence from './CompetenceForm';

export const FormStep2: React.FC = () => {
  const {prevStep, nextStep, dataForm, dataFormStep} = useFormContext();
  const initialValues = {
    formacao: [{instituicao: '', curso: ''}],
    experiencia: [{empresa: '', cargo: '', tempo: '', sua_empresa_atual: ''}],
    // competencias: ['editar'],
    competencias: [''],
  };

  return (
    <Box w={'full'}>
      <Title>Experiência</Title>
      <Formik
        enableReinitialize
        initialValues={
          dataFormStep.stepTwo.submited?
          initialValues:
          dataFormStep.stepTwo
        }
        onSubmit={(values:unknown) => {
          nextStep();
          dataForm(values, 'stepTwo');
        }
        }
        validationSchema={stepTwoValidate}
      >
        {({values}) => {
          return (
            <Form>
              <Box paddingX={['0', '0', '10', '32']}>
                <Formation values={values} />
                <Experience values={values} />
                <Competence values={values} />
              </Box>
              <GroupButtonLeftRight
                labelLeft='Voltar'
                labelRight='Próximo'
                onClickLeft={prevStep}
                _sizeButton={'md'}
                typeButtonRight={'submit'}
              />
            </Form>
          );
        }}

      </Formik>
    </Box>
  );
};

export default FormStep2;
