import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Routes from './Router';
import theme from './style/themeGLobal';
import Layer from './components/Layer';
import {GlobalProvider} from './contexts/GlobalContext';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <Layer>
          <Routes/>
        </Layer>
      </GlobalProvider>
    </ChakraProvider>
  );
};

export default App;
