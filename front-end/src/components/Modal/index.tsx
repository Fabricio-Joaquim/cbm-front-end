import {ModalOverlay, ModalContent, ModalBody,
  ModalFooter, Modal, Text} from '@chakra-ui/react';
import {FaCheck} from 'react-icons/fa';
import * as yup from 'yup';
import React from 'react';
import Button from '../../components/Button';

const MyModal = ({isOpen, onClose}:any) => {
  // eslint-disable-next-line no-unused-vars
  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function() {
      return new Date();
    }),
  });
  /*
            font-weight: 600;
font-size: 32px;
line-height: 39px;
text-align: center;

color: #429542;
            */
  return (
    <>

      <Modal closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
        >
          <ModalBody pb={6} display={'flex'}
            flexDirection={'column'}
            width={'full'} alignItems={'center'}
            justifyContent={'center'} marginTop={'40px'}
          >
            <FaCheck size={130} color={'#429542'}/>
            <Text fontWeight={'bold'} fontSize={'2xl'}
              color={'#429542'} lineHeight={'39px'}
              w={'44'} textAlign={'center'}
            >
            Cadastrado com sucesso!
            </Text>
          </ModalBody>

          <ModalFooter display={'flex'} paddingTop={'100px'}
            justifyContent={'space-between'}>
            <Button color='Gray' onClick={onClose}>Sair</Button>
            <Button color='Orange' mr={3}>
                Ver Perfil
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
