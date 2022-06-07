import {Button, ButtonProps} from '@chakra-ui/react';
import React from 'react';

const Orange = 'linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%), #D9D9D9';
const Gray = 'linear-gradient(91.76deg, #A8A8A8 0%, #C4C4C4 100%), #D9D9D9';

interface IProps extends ButtonProps{
    color: 'Gray' | 'Orange',
    children: string | React.ReactNode,
    onClick?: () => void | any,
    rest?:any,
    _sizeButton?: 'sm' | 'md' | 'lg',
}

const MyButton: React.FC<IProps> = ({color, children,
  onClick, _sizeButton, ...rest}) =>{
  let personalizeSize ={};
  switch (_sizeButton) {
    case 'lg':
      personalizeSize = {
        w: ['280px', '408px'],
        h: '90px',
        fontSize: '2rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '39px',
      };
      break;
    case 'md':
      personalizeSize = {
        w: '216.84px',
        h: '68px',
        borderRadius: '14px',
      };
      break;
    default: '';
  }


  return (
    <Button
      borderRadius={'63px'}
      bgGradient={color === 'Gray' ? Gray : Orange}
      fontWeight={'500'} fontSize={'1.125rem'}
      lineHeight={'39px'} color={'#fff'}
      w={'100%'}
      maxW={'408px'}
      minW={'129px'}
      maxH={'90px'}
      minH={'35px'}
      onClick={onClick}
      {...personalizeSize}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default MyButton;
