import React, {useEffect} from 'react';
import Button from '../../components/Button';
import {Flex, Text, Box} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import api from '../../services';
import IPerson from '../../types/IPerson';
import CardPerson from '../../components/CardPerson';
import {useGlobalContext} from '../../contexts/GlobalContext';

const Description: React.FC = () => {
  const [list, setList] = React.useState<IPerson[]>([]);
  const navigate = useNavigate();
  const backScreen = () => navigate(-1);
  const {setPersonDescription} = useGlobalContext();
  const handlerPerson = (person: IPerson) => {
    setPersonDescription(person);
    navigate('/descricao');
  };
  useEffect(() => {
    api.get('perfil').then(({data})=>setList(data));
  }, []);

  return (
    <Box minHeight={'container.md'}
    >
      <Text textStyle={'h1'} margin={'57px 0'}>Candidatos</Text>

      <Flex
        minWidth={['200px', '200px', '700px', '998px']}
        overflowY={'scroll'}
        height={'70%'}
        flexDirection={'column'}
        gap={'1rem'}
      >
        {list.map(
            (Person:IPerson, index:number)=>
              <CardPerson
                key={index}
                Person={Person}
                index={index}
                onClick={handlerPerson}
              />,
        ) }
      </Flex>
      <Button h={'68px'} borderRadius={'10px'}
        w={'216px'} color='Orange' onClick={backScreen}>
        Voltar
      </Button>
    </Box>
  );
};

export default Description;
