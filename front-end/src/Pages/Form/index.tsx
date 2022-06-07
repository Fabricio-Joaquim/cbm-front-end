import React from 'react';
import {FormProvider} from '../../contexts/FormContext';
import {Box} from '@chakra-ui/react';
import FormComplete from './FormComplete';

const Form: React.FC = () => {
  return (
    <FormProvider>
      <Box w={'2000px'}>
        <FormComplete />
      </Box>
    </FormProvider>
  );
};

export default Form;
