import React from 'react';
import {useFormContext} from '../../contexts/FormContext';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import HeaderForm from './HeaderForm';


const Form: React.FC = () => {
  const {step} = useFormContext();
  // Refactor:
  const renderScreen = () => {
    switch (step) {
      case 1:
        return <FormStep1 />;
      case 2:
        return <FormStep2 />;
      case 3:
        return <FormStep3 />;
      case 4:
        return <FormStep3 />;
      default:
        return <div>Not Found</div>;
    }
  };


  return (
    <React.Fragment>
      <HeaderForm />
      {renderScreen()}
    </React.Fragment>
  );
};

export default Form;
