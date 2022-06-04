import {Button, ModalOverlay, ModalContent, ModalBody,
  ModalFooter, ModalHeader,
  ModalCloseButton, Modal} from '@chakra-ui/react';
import React from 'react';

const MyModal = ({isOpen, onClose}:any) => {
  return (
    <>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

sasass
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
                Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
