import React from 'react';
import {Heading} from '@chakra-ui/react';

interface Iprops {
    title?: string;
    children: string;
}

const Title: React.FC<Iprops> = ({title, children}) => {
  return (

    <Heading padding={'40px 0'}
      fontWeight= {'500'}
      fontSize= {'40px'}
      lineHeight= {'48px'}
      color= {'#979595'}
      textAlign={'center'}>
      {children}
    </Heading>

  );
};

export default Title;
