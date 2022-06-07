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
    h3: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.5rem',
      lineHeight: '29px',
      color: '#767474',
    },
    span: {
      fontWeight: '500',
      fontSize: '1.25rem',
      lineHeight: '24px',
      color: '#868686',
    },
    spanSub: {
      fontWeight: '400',
      fontSize: '1.25rem',
      lineHeight: '24px',
      color: '#868686',
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
      button: {
        _hover: {
          bg: '#f4f4f4 !important',
          border: '2px #979595 solid !important',
          color: '#979595',
          transition: '$button-hover .3s ease-in-out !important',
          svg: {
            fill: '#979595',
          },
        },
      },
    },
  },
});

export default theme;
