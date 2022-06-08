// @ts-nocheck
import {Editable, FormControl, FormErrorMessage,
  EditableInput, EditablePreview} from '@chakra-ui/react';
import {Field, useFormikContext, getIn} from 'formik';
import React from 'react';

interface IProps extends InputProps {
  nameID: string | any
}

const CustomControlsExample:React.FC<IProps> = ({nameID, ...rest}) => {
  const {errors, touched, values} = useFormikContext();
  const errorMessage = getIn(errors, nameID);
  const arrayErrorTouch = getIn(touched, nameID);
  const getValue = getIn(values, nameID);
  return (
    <FormControl
      minWidth={'40px'}
      width={'auto'}
      isInvalid={
        (!!errors[nameID] && touched[nameID]) ||
        (errorMessage && arrayErrorTouch)
      }>
      <Editable
        isPreviewFocusable={true}
        value={getValue}
      >
        <EditablePreview
          color={'#FFF'}
          bg={'#9BD26F'}
          borderRadius={'11px'}
          border={'1px solid #EFEFEF'}
          paddingX={'3'}
          minWidth={'20px'}
          height={'30px'}
        />
        <Field
          as={EditableInput}
          id={nameID}
          style={{backgroundColor: '#F3F3F3', borderRadius: '11px'}}
          name={nameID}
          variant="outline"
          {...rest}
        />
      </Editable>
      <FormErrorMessage>
        {errors[nameID] || errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomControlsExample;
