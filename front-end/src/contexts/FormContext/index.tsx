import React, {createContext, useContext, useState} from 'react';
import {IFormContext} from '../../types/IContext';
import api from '../../services';

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
  const [step, setStep] = useState(2);
  const [dataFormStep, setDataFormStep] = useState({
    stepOne: {cpf: '', telefone: ''},
    stepTwo: {},
    stepThree: {},
  });

  const nextStep = () => setStep((step) => step + 1);
  const prevStep = () => setStep((step) => step - 1);

  const dataForm = (stepForm:any, positionStep: 'stepOne'
   | 'stepTwo'|'stepThree') => {
    setDataFormStep({...dataFormStep, [positionStep]: stepForm});

    if (positionStep === 'stepThree') {
      const newCPF = dataFormStep.stepOne.cpf;
      postRequest({
        ...dataFormStep.stepOne,
        cpf: newCPF,
        ...dataFormStep.stepTwo,
        ...dataFormStep.stepThree});
    }
  };

  const postRequest = (data:unknown) => {
    api.post('/perfil', data)
        .then(({data}:any)=>console.log(data))
        .catch((err:Error)=>console.error(err, form));
  };

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
