import React, {memo} from 'react';
import {Grid, Text} from '@chakra-ui/react';
import IPerson from '../../types/IPerson';
import {AiOutlineSearch} from 'react-icons/ai';
import Button from '../Button';
interface IProps{
    Person: IPerson;
    index: number;
    onClick:(data:IPerson)=>void;
}
const CardPerson: React.FC<IProps> = ({Person, index, onClick}:IProps) => {
  return (
    <Grid templateColumns={'1fr .5fr'} gap={6}
      key={Person.cpf}
      height={'63px'}
      borderRadius={'10px'}
      bg={index%2? '#F3F3F3': '#FFFFFF'}
      padding={'10px'} justifyContent={'space-between'}
      placeItems={'center'}
    >
      <Text w={'90%'}>{Person.name}</Text>
      <Button
        w={['4 !important', '160px']} height={'35px'}
        fontWeight={'500'} fontSize={'1.125rem'}
        color='Orange' lineHeight={'21px'}
        onClick={()=>onClick(Person)}
      >
        <AiOutlineSearch height={21} width={21} color="#fff"/>Ver
      </Button>
    </Grid>
  );
};
export default memo(CardPerson);
