import React from 'react';
import Title from '../Title';
import {stepTwoValidate} from '../validation';
import {Formik, Form} from 'formik';
import {useFormContext} from '../../../contexts/FormContext';
import {Box} from '@chakra-ui/react';
import GroupButtonLeftRight from '../../../components/GroupButtonLeftRight';
import Formation from './FormationForm';
import Experience from './ExperienceForm';
import Competence from './CompetenceForm';

export const FormStep2: React.FC = () => {
  const {prevStep, nextStep, dataForm} = useFormContext();
  const initialValues = {
    formacao: [{instituicao: '', curso: ''}],
    experiencia: [{empresa: '', cargo: '', tempo: '', sua_empresa_atual: ''}],
    competencia: ['editar'],
  };

  return (
    <Box w={'full'}>
      <Title>Experiência</Title>
      <Formik
        enableReinitialize
        initialValues={
          initialValues}
        onSubmit={(values:any) => {
          nextStep();
          dataForm(values, 'stepTwo');
        }
        }
        validationSchema={stepTwoValidate}
      >
        {({values}) => {
          return (
            <Form>
              <Formation values={values} />
              <Experience values={values} />
              <Competence values={values} />
              <GroupButtonLeftRight
                labelLeft='Voltar'
                labelRight='Próximo'
                onClickLeft={prevStep}
                onClickNext={()=>{}}
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
