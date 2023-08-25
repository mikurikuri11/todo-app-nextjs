import { FC } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link, DrawerCloseButton, Flex, Box, Spacer } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDrawer: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Flex gap={3} flexDirection="column" pl={3} pt={3} fontSize="lg">
                <Link href="/">TOP</Link>
                <Link href="/user-management">ユーザー一覧</Link>
                <Link href="/setting">設定</Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
  )
}