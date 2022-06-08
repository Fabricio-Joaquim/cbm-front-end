import React from 'react';
import {FaCheck} from 'react-icons/fa';
import {ModalOverlay, ModalContent, ModalBody,
  ModalFooter, Modal, Text} from '@chakra-ui/react';
import Button from '../../components/Button';
import {useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../contexts/GlobalContext';

const MyModal = ({isOpen, onClose}:any) => {
  const navigate = useNavigate();
  const {cpf} = useGlobalContext();

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
            <Button color='Gray' _sizeButton={'sm'}
              onClick={()=>{
                onClose(); navigate('/');
              }}>Sair</Button>
            <Button _sizeButton={'sm'} color='Orange' mr={3}
              onClick={ ()=> {
                onClose(); navigate(`/descricao/${cpf}`);
              }}>
                Ver Perfil
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
