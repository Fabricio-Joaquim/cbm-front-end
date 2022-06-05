import React, {createContext, useContext, useState} from 'react';
import {IFormContext} from '../../types/IContext';

const GlobalContext = createContext<IFormContext>({
  setForm: ()=>{}, form: undefined, step: 1,
  nextStep: () => {},
  prevStep: () => {},
  dataForm: () => {},
});

interface Props {
    children: React.ReactNode,
    form?:any,
}

export const FormProvider = ({children}:Props) => {
  const [form, setForm] = useState({});
  const [step, setStep] = useState(1);
  const [dataFormStep, setDataFormStep] = useState({
    stepOne: {},
    stepTwo: {},
    stepThree: {},
  });
  const nextStep = () => setStep((step) => step + 1);
  const prevStep = () => setStep((step) => step - 1);

  const dataForm = (stepForm:any, positionStep: 'stepOne' | 'stepTwo') => {
    setDataFormStep({...dataFormStep, [positionStep]: stepForm});
  };
  console.log(dataFormStep, form);
  return (
    <GlobalContext.Provider value={{
      nextStep,
      prevStep,
      setForm,
      dataForm,
      step,
      setDataFormStep,
      dataFormStep,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useFormContext = () => useContext(GlobalContext);
