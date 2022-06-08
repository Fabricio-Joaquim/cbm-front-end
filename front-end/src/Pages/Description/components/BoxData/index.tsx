import React from 'react';
import {Box, Text} from '@chakra-ui/react';

interface IProps{
    _label:string;
    _value:string | number | undefined;
}

const BoxData: React.FC <IProps>= ({_label, _value}) => {
  return (
    <Box display={'flex'} gap={1}>
      <Text textStyle={'span'}>{_label}:</Text>
      {_value}
    </Box>
  );
};

export default BoxData;
