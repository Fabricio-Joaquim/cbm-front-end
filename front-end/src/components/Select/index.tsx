// @ts-nocheck
import {FormControl, FormErrorMessage,
  FormLabel, SelectProps, Select} from '@chakra-ui/react';
import {Field, useFormikContext, getIn} from 'formik';
import React from 'react';
import './style.css';

interface IOptions{value:string, label:string}
interface IProps extends SelectProps {
    nameID: 'signo' | 'tipo_sanguineo' | any;
     _label: string | 'disabled';
     options: IOptions[];
  }

const MySelect: React.FC<IProps> = ({_label, nameID, options, ...rest}) => {
  const {errors, touched} = useFormikContext();
  const errorMessage = getIn(errors, nameID);
  const arrayErrorTouch = getIn(touched, nameID);
  const personalized = _label!=='disabled';
  return (
    <FormControl w={_label}
      isInvalid={(!!errors[nameID] && touched[nameID] ||
    (errorMessage && arrayErrorTouch))}>
      {personalized&&<FormLabel htmlFor="password">{_label}</FormLabel>}
      <Field
        as={Select}
        id={nameID}
        className={personalized?'':'personalize-select'}
        style={{backgroundColor: '#F3F3F3', borderRadius: '11px'}}
        name={nameID}
        _focus={{boxShadow:
          '0 0 0 3px rgba(168, 168, 168,.6)',
        }}
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
      <FormErrorMessage>{errors[nameID] || errorMessage}</FormErrorMessage>
    </FormControl> );
};

export default MySelect;
