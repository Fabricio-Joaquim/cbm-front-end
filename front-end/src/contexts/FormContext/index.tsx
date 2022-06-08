// @ts-nocheck
import {useQuery} from 'react-query';
import {Text} from '@chakra-ui/react';
import IPerson from '../../types/IPerson';
import Loading from '../../components/Loading';
import removeCaracter from '../../utils/removeCaracter';
import {IFormContext, ArrayInput} from '../../types/IContext';
import {getMUltiDataForm, postRequest} from '../../services/request';
import convertArrayToOptions from '../../utils/convertArrayToOptions';
import React, {createContext, useCallback, useContext, useState} from 'react';

const GlobalContext = createContext<IFormContext>({
  competence: [],
  bloodType: [],
  sign: [],
  step: 1,
  nextStep: () => {},
  prevStep: () => {},
  dataForm: () => {},
});

interface IProps {
    children: React.ReactNode,
}

const initialDataForm = {
  stepOne: {submited: true, cpf: '', telefone: ''},
  stepTwo: {submited: true, experiencia: []},
  stepThree: {submited: true},
};

export const FormProvider = ({children}:IProps) => {
  const [step, setStep] = useState(1);
  const [sign, setSign] = useState<ArrayInput[]>([]);
  const [bloodType, setBloodType] = useState<ArrayInput[]>([]);
  const [competence, setCompetence] = useState<ArrayInput[]>([]);
  const [dataFormStep, setDataFormStep] = useState(initialDataForm);
  const [loadingForm, setLoadingForm] = useState(false);
  const nextStep = () => {
    step <= 4 && setStep((step) => step + 1);
  };
  const prevStep = () => setStep((step) => step - 1);

  const dataForm = useCallback(
      (stepForm:unknown, positionStep: 'stepOne'
   | 'stepTwo'|'stepThree') => {
        setDataFormStep({
          ...dataFormStep,
          [positionStep]: stepForm,
        });
        if (positionStep === 'stepThree') {
          setLoadingForm(true);
          const newCPF = removeCaracter(dataFormStep.stepOne.cpf);
          const newTelefone = removeCaracter(dataFormStep.stepOne.telefone);
          const newAtualJob = dataFormStep.stepTwo.experiencia.map(
              (item:any) => {
                return {
                  ...item,
                  sua_empresa_atual:
                  item.sua_empresa_atual==='true' ? true : false,
                };
              },
          );
          const result = ({
            ...dataFormStep.stepOne,
            cpf: newCPF,
            telefone: newTelefone,
            ...dataFormStep.stepTwo,
            experiencia: newAtualJob,
            ...stepForm,
            submited: undefined,
          });
          setDataFormStep(initialDataForm);
          return postRequest(result)
              .then((response:IPerson) => response)
              .catch((error) => error)
              .finally(() => setLoadingForm(false));
        }
      },
      [dataFormStep],
  );

  const {error, isLoading} = useQuery('form', ()=> getMUltiDataForm()
      .then((data)=>data),
  {
    refetchOnWindowFocus: true,
    onSuccess: (data) => {
      setSign(convertArrayToOptions(data[0]));
      setBloodType(convertArrayToOptions(data[1]));
      setCompetence(convertArrayToOptions(data[2]));
    },
  });

  if (error) {
    return <Text>Erro ao carregar os dados</Text>;
  }
  if (isLoading) {
    return <Loading/>;
  }

  return (
    <GlobalContext.Provider value={{
      step,
      sign,
      nextStep,
      prevStep,
      dataForm,
      bloodType,
      competence,
      loadingForm,
      dataFormStep,
      setDataFormStep,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useFormContext = () => useContext(GlobalContext);
