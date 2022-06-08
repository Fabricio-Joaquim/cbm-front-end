import React from 'react';
import {FormProvider} from '../../contexts/FormContext';
import {Box} from '@chakra-ui/react';
import FormComplete from './Steps';

const Form: React.FC = () => {
  return (
    <FormProvider>
      <Box w={['72', '80', 'full', '2000px']}>
        <FormComplete />
      </Box>
    </FormProvider>
  );
};

export default Form;
