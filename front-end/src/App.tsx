import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Routes from './Router';
import theme from './style/themeGLobal';
import Layer from './components/Layer';
import {GlobalProvider} from './contexts/GlobalContext';
import {QueryClient, QueryClientProvider} from 'react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <QueryClientProvider client={queryClient}>
          <Layer>
            <Routes/>
          </Layer>
        </QueryClientProvider>
      </GlobalProvider>
    </ChakraProvider>
  );
};

export default App;
