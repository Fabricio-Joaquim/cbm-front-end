import React from 'react';
import {Box, Flex, Image} from '@chakra-ui/react';
interface IProps {
    icon: string;
    lineBefore?: boolean;
    active?: boolean;
    concluded?: boolean;
    initial?: boolean;
}

export const IconLogo =({icon, lineBefore, active,
  concluded, initial}:IProps)=>{
  const completedColor = '#429542';
  const uncompletedColor = '#C3C3C3';
  const currentColor = `linear-gradient(100.23deg,
     #D42F43 -23.11%, rgba(211, 130, 62, 0.73) 126.59%)`;

  const colorStep = (notColor:boolean = false)=>{
    if (active && !notColor) {
      return currentColor;
    }
    if (concluded) {
      return completedColor;
    }
    return uncompletedColor;
  };

  return (
    <>
      <Flex borderRadius={'50%'}
        justifyContent={'center'}
        alignItems={'center'}
        h={['75', '140px']} w={['140px']} bg={colorStep()}
        transition={'all 0.3s ease-in-out' }>
        <Image height={['30px', '30px', '50px']} alt={'icone de etapa'}
          src={icon} transition={'all 0.3s ease-in-out' } />
      </Flex>
      {lineBefore&&<Box height={'8px'}
        alignSelf={'center'} transition={'all 0.5s ease-in-out' }
        bg={colorStep(true)} w={'106px'}/>}
    </>
  );
};
