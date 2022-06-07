import React from 'react';
import logo from '../../assets/logo-CBM.svg';
import {Image, Box, Heading} from '@chakra-ui/react';
import Button from '../../components/Button';
import {useNavigate} from 'react-router-dom';

const Home:React.FC = () => {
  const navigate = useNavigate();
  const handlerCompetitor = () => navigate('/lista-de-candidatos');
  const handlerForm = () => navigate('/formulario');
  return (
    <Box display={'flex'} justifyContent={'center'}
      alignItems={'center'} flexDirection={'column'}
      padding={['0', '50px']} gap={['5']}
      textAlign={'center'} minHeight={'80%'}
    >
      <Image w={'215px'} h={'215px'} src={logo} alt="logo" />
      <Heading lineHeight={'48px'} fontStyle={'normal'}
        fontWeight= {'500'} paddingTop={'5'} paddingBottom={'2'}
        fontFamily= {'Inter'}
        fontSize={'2.5rem'}>TRABALHE CONOSCO</Heading>
      <Button _sizeButton='lg'
        onClick={handlerForm} color='Orange'>Cadastre-se</Button>
      <Button _sizeButton='lg' onClick={handlerCompetitor} color='Gray'
      >
        Ver Concorrentes
      </Button>
    </Box>
  );
};

export default Home;
