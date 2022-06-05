// @ts-nocheck
import React from 'react';
import {FormControl, FormLabel, Input,
  InputProps, FormErrorMessage, Textarea} from '@chakra-ui/react';
import {Field, useFormikContext, getIn} from 'formik';

interface IProps extends InputProps {
  nameID: 'telefone' | 'email' | 'nome' |
   'cpf' | 'data_nascimento' | 'signo' | 'tipo_sanguineo' | any;
   _label: string;
   isTextArea?: boolean;
}

const MyInput: React.FC<IProps> =
({nameID, _label, isTextArea, ...rest}:IProps) => {
  const {errors, touched} = useFormikContext();
  const errorMessage = getIn(errors, nameID);
  const arrayErrorTouch = getIn(touched, nameID);
  console.log(getIn(errors, nameID));
  return (
    <FormControl isInvalid={
      (!!errors[nameID] && touched[nameID]) || (errorMessage && arrayErrorTouch)
    }>
      <FormLabel htmlFor="password">{_label}</FormLabel>
      <Field
        as={isTextArea? Textarea : Input}
        id={nameID}
        style={{backgroundColor: '#F3F3F3', borderRadius: '11px'}}
        name={nameID}
        type="tel"
        variant="outline"
        {...rest}
      />
      <FormErrorMessage>
        {errors[nameID] || errorMessage}
      </FormErrorMessage>
    </FormControl> );
};

export default MyInput;
