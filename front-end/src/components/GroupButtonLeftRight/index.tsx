import React from 'react';
import {Flex} from '@chakra-ui/react';
import MyButton from '../Button';

interface Iprops {
    onClickLeft: () => void;
    onClickNext?: () => void;
    isDisabledLeft?: boolean;
    isDisabledRight?: boolean;
    _sizeButton?: 'sm' | 'md' | 'lg';
    labelLeft: string;
    labelRight: string;
    typeButtonLeft?: 'submit' | 'reset' | 'button';
    typeButtonRight?: 'submit' | 'reset' | 'button';
    isLoading?: boolean;
}

const GroupButtonLeftRight: React.FC<Iprops> = (
    {onClickLeft, onClickNext, isDisabledLeft, typeButtonRight,
      typeButtonLeft, isLoading, isDisabledRight, _sizeButton,
      labelLeft, labelRight},
) => {
  return (
    <Flex w={'full'} justifyContent={'space-between'}
      paddingBottom={'4'}>
      <MyButton onClick={onClickLeft} color={'Gray'}
        type={typeButtonLeft} _sizeButton={_sizeButton}
        disabled={isDisabledLeft || isLoading}>{labelLeft}</MyButton>
      <MyButton onClick={onClickNext} color={'Orange'}
        type={typeButtonRight} _sizeButton={_sizeButton}
        isLoading={isLoading}
        disabled={isDisabledRight}>{labelRight}</MyButton>
    </Flex>
  );
};

export default GroupButtonLeftRight;
