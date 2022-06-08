// @ts-nocheck
import {FormControl, Radio, FormErrorMessage,
  FormLabel, RadioGroup} from '@chakra-ui/react';
import {useFormikContext, getIn, Field} from 'formik';
import React from 'react';
import './style.css';
interface IProps {
    nameID: 'sua_empresa_atual' | any;
    _label:string;
    options: any[];
}

const MyRadio: React.FC<IProps> = ({nameID, _label, options}) => {
  const {errors, touched} = useFormikContext();
  const errorMessage = getIn(errors, nameID);
  const arrayErrorTouch = getIn(touched, nameID);
  return (
    <FormControl display={'flex'} flexDirection={'column'}
      isInvalid={
        (!!errors[nameID] && touched[nameID]) ||
         (errorMessage && arrayErrorTouch)
      }>
      <FormLabel htmlFor={nameID}>{_label}</FormLabel>
      <RadioGroup defaultChecked py={2} display="flex" gridColumnGap={1}>
        {options.map((item, index) => {
          return (
            <Field
              size='lg'
              // className='radio-button-person'
              key={index}
              name={nameID}
              id={nameID}
              as={Radio}
              checked
              value={item.value}
              _focus={{boxShadow:
                '0 0 0 3px rgba(168, 168, 168,.6)',
              }}
            >
              {item.label}
            </Field>
          );
        })}
      </RadioGroup>
      <FormErrorMessage>
        {errors[nameID] || errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

export default MyRadio;
