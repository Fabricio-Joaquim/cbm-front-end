// @ts-nocheck
import React from 'react';
import {FormControl, FormLabel, Input,
  InputProps, FormErrorMessage, Textarea} from '@chakra-ui/react';
import {Field, useFormikContext} from 'formik';

interface IProps extends InputProps {
  nameID: 'telefone' | 'email' | 'nome' |
   'cpf' | 'data_nascimento' | 'signo' | 'tipo_sanguineo' | any;
   _label: string;
   _typeInput?: 'Input'| 'TextArea'
}

const MyInput: React.FC<IProps> =
({nameID, _label, _typeInput, ...rest}:IProps) => {
  const {errors, touched} = useFormikContext();
  return (
    <FormControl isInvalid={!!errors[nameID] && touched[nameID]}>
      <FormLabel htmlFor="password">{_label}</FormLabel>
      <Field
        as={_typeInput==='Input'? Input: Textarea}
        id={nameID}
        style={{backgroundColor: '#F3F3F3', borderRadius: '11px'}}
        name={nameID}
        type="tel"
        variant="outline"
        {...rest}
      />
      <FormErrorMessage>{errors[nameID]}</FormErrorMessage>
    </FormControl> );
};

export default MyInput;
