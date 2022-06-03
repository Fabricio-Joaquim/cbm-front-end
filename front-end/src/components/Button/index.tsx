import {Button, ButtonProps} from '@chakra-ui/react';
import React from 'react';

const Orange = 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%), #D9D9D9';
const Gray = 'linear-gradient(91.76deg, #A8A8A8 0%, #C4C4C4 100%), #D9D9D9';

interface IProps extends ButtonProps{
    color: 'Gray' | 'Orange',
    children: string | React.ReactNode,
    onClick?: () => void | any,
    rest?:any,
}

const MyButton: React.FC<IProps> = ({color, children, onClick, ...rest}) =>
  <Button
    borderRadius={'63px'}
    bgGradient={color === 'Gray' ? Gray : Orange}
    fontWeight={'500'} fontSize={'1.125rem'}
    lineHeight={'39px'} color={'#fff'}
    w={'100%'} h={'90px'}
    onClick={onClick}
    {...rest}
  >
    {children}
  </Button>;

export default MyButton;
