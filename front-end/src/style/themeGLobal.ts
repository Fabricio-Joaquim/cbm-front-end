import {Theme, extendTheme} from '@chakra-ui/react';


const theme:Theme | any = extendTheme({
  textStyles: {
    h1: {
      fontStyle: 'normal',
      fontSize: '2.5rem',
      fontWeight: '500',
      lineHeight: '48px',
      color: '#767474',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        fontFamily: 'Inter',
        color: '#979595',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
