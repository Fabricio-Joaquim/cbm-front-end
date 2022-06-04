// @ts-nocheck
import {FormControl, FormErrorMessage,
  FormLabel, SelectProps, Select} from '@chakra-ui/react';
import {Field, useFormikContext} from 'formik';
import React from 'react';

interface IOptions{value:string, label:string}
interface IProps extends SelectProps {
    nameID: 'signo' | 'tipo_sanguineo';
     _label: string;
     options: IOptions[];
  }

const MySelect: React.FC<IProps> = ({_label, nameID, options, ...rest}) => {
  const {errors, touched} = useFormikContext();

  return (
    <FormControl isInvalid={!!errors[nameID] && touched[nameID]}>
      <FormLabel htmlFor="password">{_label}</FormLabel>
      <Field
        as={Select}
        id={nameID}
        style={{backgroundColor: '#F3F3F3', borderRadius: '11px'}}
        name={nameID}
        variant="outline"
        {...rest}
      >
        {options.map(
            (option, index:number) =>
              <React.Fragment key={index}>
                <option hidden value="">Selecionar</option>
                <option value={option.value}>{option.label}
                </option>
              </React.Fragment>,
        )}
      </Field>
      <FormErrorMessage>{errors[nameID]}</FormErrorMessage>
    </FormControl> );
};

export default MySelect;
