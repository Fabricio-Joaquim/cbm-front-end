import {Box, Flex, Text} from '@chakra-ui/react';
import {FieldArray} from 'formik';
import React from 'react';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {BsPlusCircle} from 'react-icons/bs';
import EditInput from '../../../../components/EditInput';

const CompetetionForm: React.FC<any> = ({values}) => {
  return (
    <FieldArray
      name="competencia"
      render={(arrayHelpers) => (
        <Box
          paddingX={'32'} paddingBottom={'12'}
        >
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
            {values.competencia.map((_:string, index:number ) => {
              return (
                <React.Fragment
                  key={index}>
                  <EditInput
                    nameID={`competencia.${index}`}
                  />
                  {(values?.competencia?.length>1)&&
                            <AiOutlineMinusCircle style={{marginTop: '.450rem'}}
                              onClick={() => {
                                arrayHelpers.remove(index);
                              }}
                              cursor={'pointer'}
                            />}
                  {(index === values.competencia.length-1) &&
                          <BsPlusCircle
                            cursor={'pointer'} style={{marginTop: '.450rem'}}
                            onClick={()=>arrayHelpers.push('editar')} />
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
