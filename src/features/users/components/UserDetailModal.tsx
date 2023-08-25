import { FC } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { User } from "@/types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = ({ user, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          {user && (
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>NAME</FormLabel>
                <Input value={user.username} isReadOnly />
                <FormLabel>FULL_Name</FormLabel>
                <Input value={user.name} isReadOnly />
                <FormLabel>MAIL</FormLabel>
                <Input value={user.email} isReadOnly />
                <FormLabel>TEL</FormLabel>
                <Input value={user.phone} isReadOnly />
              </FormControl>
            </Stack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
