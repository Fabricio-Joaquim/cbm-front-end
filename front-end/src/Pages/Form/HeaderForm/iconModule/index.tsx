import {Box, Flex, Image} from '@chakra-ui/react';
import React from 'react';
interface IProps {
    icon: string;
    lineBefore?: boolean;
    active?: boolean;
    concluded?: boolean;
    initial?: boolean;
}

export const IconLogo =({icon, lineBefore, active,
  concluded, initial}:IProps)=>{
  const preenchendo = `linear-gradient(100.23deg,
     #D42F43 -23.11%, rgba(211, 130, 62, 0.73) 126.59%)`;

  const colorStep = (notColor:boolean = false)=>{
    if (active && !notColor) {
      return preenchendo;
    }
    if (concluded) {
      return '#429542';
    }
    return '#C3C3C3';
  };

  return (
    <>
      <Flex borderRadius={'50%'} justifyContent={'center'}
        alignItems={'center'}
        h={'140px'} w={'140px'} bg={colorStep()}>
        <Image src={icon}
        />
      </Flex>
      {lineBefore&&<Box height={'8px'}
        alignSelf={'center'}
        bg={colorStep(true)} w={'106px'}/>}
    </>
  );
};
