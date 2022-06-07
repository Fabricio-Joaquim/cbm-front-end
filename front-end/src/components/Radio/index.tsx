// @ts-nocheck
import {FormControl, Radio, FormErrorMessage,
  FormLabel, Flex} from '@chakra-ui/react';
import {useFormikContext, getIn, Field} from 'formik';
import React from 'react';

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
      <Flex>
        {/*         {options.map((option:any, index:any) => (
          <Flex key={index}>
            {option.label}
            <Field
              name={nameID}
              value={option.value}
              as={Radio}
            />
          </Flex>
        ))} */}
                  Sim
        <Field
          as={Radio}
          id={nameID}
          name={nameID}
          variant="outline"
          value={false}
        />
        Não
        <Field
          as={Radio}
          id={nameID}
          name={nameID}
          variant="outline"
          value={true}
        />
      </Flex>
      <FormErrorMessage>
        {errors[nameID] || errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

export default MyRadio;


/*

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
    </FormControl>
*/
