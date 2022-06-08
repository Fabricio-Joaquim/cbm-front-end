import React, {createContext, useContext, useState} from 'react';
import {IGlobalContext} from '../../types/IContext';
import IPerson from '../../types/IPerson';

const GlobalContext = createContext<IGlobalContext>({});

const initialValuesPerson: IPerson = {
  cpf: '',
  name: '',
  signo: '',
  email: '',
  telefone: -1,
  tipo_sanguineo: '',
  resumo: '',
  competencias: [],
  data_nascimento: '',
  experiencia: [],
  formacao: [],
};
interface Props {
    children: React.ReactNode;
}

export const GlobalProvider = ({children}:Props) => {
  const [PersonDescription, setPersonDescription] =
  useState<IPerson>(initialValuesPerson);
  const [cpf, setCpf] = React.useState('');
  const handlerCPF = (cpfUSer:any) => setCpf(cpfUSer);

  return (
    <GlobalContext.Provider value={{
      cpf,
      handlerCPF,
      PersonDescription,
      setPersonDescription,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
