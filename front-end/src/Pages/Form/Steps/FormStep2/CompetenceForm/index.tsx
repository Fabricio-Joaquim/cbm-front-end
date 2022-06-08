import React from 'react';
import {FieldArray} from 'formik';
import {BsPlusCircle} from 'react-icons/bs';
import {Box, Flex, Text} from '@chakra-ui/react';
import {AiOutlineMinusCircle} from 'react-icons/ai';
// import EditInput from '../../../../../components/EditInput';
import SelectInput from '../../../../../components/Select';
import {useFormContext} from '../../../../../contexts/FormContext';

const CompetetionForm: React.FC<any> = ({values}) => {
  const {competence} = useFormContext();
  return (
    <FieldArray
      name="competencias"
      render={({push, remove}) => (
        <Box paddingBottom={'12'} >
          <Flex justifyContent={'space-between'}
            alignItems={'center'} verticalAlign={'center'}>
            <Text>Competências</Text>
          </Flex>
          <Flex
            border={'2px solid #D9D9D9'}
            minHeight={'135px'}
            borderRadius={'8px'}
            bg= {'#F3F3F3'}
            padding={'1rem'}
            gap={'3'}
            flexWrap={'wrap'}
          >
            {values.competencias.map((_:string, index:number ) => {
              return (
                <React.Fragment
                  key={index}>
                  {/* <EditInput
                    nameID={`competencias.${index}`}
                  /> */}
                  <SelectInput
                    _label='disabled'
                    nameID={`competencias.${index}`}
                    options={competence}
                    color={'#FFF'}
                    bg={'#9BD26F !important'}
                    borderRadius={'11px'}
                    border={'1px solid #EFEFEF'}
                    minWidth={'20px !important'}
                    width={'max'}
                    height={'30px'}
                  />
                  {(values?.competencias?.length > 1) &&
                            <AiOutlineMinusCircle style={{marginTop: '.450rem'}}
                              onClick={() => remove(index)}
                              cursor={'pointer'}
                            />}
                  {(index === (values.competencias.length - 1)) &&
                          <BsPlusCircle
                            cursor={'pointer'} style={{marginTop: '.450rem'}}
                            onClick={() => push('')} />
                  }
                </React.Fragment>
              );
            })}
          </Flex>
        </Box>
      )}
    />
  );
};

export default CompetetionForm;
