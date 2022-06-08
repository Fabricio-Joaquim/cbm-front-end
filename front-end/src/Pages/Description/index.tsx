import React, {useEffect} from 'react';
import About from './About';
import Formation from './Formation';
import Experience from './Experience';
import Competence from './Competence';
import PersonalData from './PersonalData';
import {Box, Flex} from '@chakra-ui/react';
import MyButton from '../../components/Button';
import {useNavigate, useParams} from 'react-router-dom';
import {useGlobalContext} from '../../contexts/GlobalContext';
import api from '../../services';

const Description: React.FC = () => {
  const {cpf} = useParams();
  const {setPersonDescription} = useGlobalContext();


  useEffect(() => {
    if (cpf) {
      api.get(`/perfil/${cpf}`)
          .then(({data}:any)=>setPersonDescription(data));
    }
  }, []);


  const navigate = useNavigate();
  const handlerBack = () => navigate(-1);
  return (
    <Box >
      <Box
        width={['78', '48', 'full', '998px']}
        padding={['0', '', '6', '0 98px']}>
        <PersonalData/>
        <About/>
        <Formation/>
        <Experience/>
        <Competence/>
      </Box>
      <Flex justifyContent={['center', 'flex-start']}>
        <MyButton
          margin={['7rem 0 0 0rem', '7rem 0 0 3rem']}
          _sizeButton={'md'}
          onClick={handlerBack}
          color='Orange'>Voltar</MyButton>
      </Flex>
    </Box>
  );
};

export default Description;
