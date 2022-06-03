import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Routes from './Router';
import theme from './style/themeGLobal';
import Layer from './components/Layer';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layer>
        <Routes/>
      </Layer>
    </ChakraProvider>
  );
};

export default App;
