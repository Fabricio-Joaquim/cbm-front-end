import React, {createContext, useContext} from 'react';
import IContext from '../types/IContext';

const GlobalContext = createContext<IContext>({
  setState: null, state: null});

interface Props {
    children: React.ReactNode;
}

export const GlobalProvider = ({children}:Props) => {
  const [state, setState] = React.useState(0);
  const [PersonDescription, setPersonDescription] = React.useState<any>(null);
  return (
    <GlobalContext.Provider value={{state, setState,
      PersonDescription, setPersonDescription}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
