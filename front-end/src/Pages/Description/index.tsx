// @ts-nocheck
import React from 'react';
import {Box} from '@chakra-ui/react';
import PersonalData from './PersonalData';
import Formation from './Formation';
import Experience from './Experience';
import About from './About';
import Competence from '../Competence';
import MyButton from '../../components/Button';
import {useNavigate} from 'react-router-dom';
const Description: React.FC = () => {
  const navigate = useNavigate();
  const handlerBack = () => navigate(-1);
  return (
    <Box
    >
      <Box
        width={'998px'}
        padding={'0 98px'}>
        <PersonalData/>
        <About/>
        <Formation/>
        <Experience/>
        <Competence/>
      </Box>
      <MyButton
        margin={'7rem 0 0 3rem'}
        _sizeButton={'md'}
        onClick={handlerBack}
        color='Orange'>Voltar</MyButton>
    </Box>
  );
};

export default Description;
