// @ts-nocheck
import React from 'react';
import {FormControl, FormLabel, Input,
  InputProps, FormErrorMessage, Textarea} from '@chakra-ui/react';
import {Field, useFormikContext, getIn} from 'formik';

interface IProps extends InputProps {
  nameID: 'telefone' | 'email' | 'nome' |
   'cpf' | 'data_nascimento' | 'signo' | 'tipo_sanguineo'| any;
   _label: string;
   isTextArea?: boolean;
}

const MyInput: React.FC<IProps> =
({nameID, _label, isTextArea, ...rest}:IProps) => {
  const {errors, touched} = useFormikContext();
  const errorMessage = getIn(errors, nameID);
  const arrayErrorTouch = getIn(touched, nameID);

  return (
    <FormControl isInvalid={
      (!!errors[nameID] && touched[nameID]) || (errorMessage && arrayErrorTouch)
    }>
      <FormLabel htmlFor={nameID}>{_label}</FormLabel>
      <Field
        data-testid={nameID}
        as={isTextArea? Textarea : Input}
        id={nameID}
        style={{backgroundColor: '#F3F3F3',
          borderRadius: '11px',
        }}
        _focus={{boxShadow:
          '0 0 0 3px rgba(168, 168, 168,.6)',
        }}
        autoComplete={'off'}
        name={nameID}
        variant="outline"
        {...rest}
      />
      <FormErrorMessage>
        {errors[nameID] || errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

export default MyInput;
