import {Flex} from '@chakra-ui/react';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Layer: React.FC<Props> = ({children}) => {
  return (
    <Flex
      bg={'#FFFFFF'}
      boxShadow="0px 24px 32px rgba(0, 0, 0, 0.25)"
      borderRadius="70"
      padding={'5'}
    >
      {children}
    </Flex>
  );
};

export default Layer;
