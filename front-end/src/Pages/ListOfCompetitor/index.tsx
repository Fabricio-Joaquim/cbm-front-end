import React, {useEffect} from 'react';
import Button from '../../components/Button';
import {Flex, Text, Box} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import api from '../../services';
import IPerson from '../../types/IPerson';
import CardPerson from '../../components/CardPerson';
import {useGlobalContext} from '../../contexts/GlobalContext';
import {useQuery} from 'react-query';
import Loading from '../../components/Loading';
import './style.css';

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
    setList([]);
  }, []);

  const {error, isLoading} = useQuery('perfil', () => api.get('perfil')
      .then(({data})=>data), {
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: true,
    onSuccess: (data) => {
      setList(data);
    },
    retryDelay: 5000,
  });

  if (error) {
    return <Text>Erro ao carregar os dados</Text>;
  }

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <Box minHeight={['container.md', 'container.sm', 'container.md',
      'container.md']}
    minWidth={['200px', '200px', '620px', '998px']}
    paddingX={['0', '0', '0', '20']}
    width={['100%', '100%', '100%', '100%']}
    >
      <Text textStyle={'h1'} margin={'57px 0'}>Candidatos</Text>
      <Flex
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
      <Flex justifyContent={['center', 'flex-start']}>
        <Button _sizeButton='md' color='Orange'
          onClick={backScreen}
        >
        Voltar
        </Button>
      </Flex>
    </Box>
  );
};

export default Description;
