"use client";

import { UserCard } from "@/features/users/components/UserCard";
import { Center, Spinner, Wrap, WrapItem, } from "@chakra-ui/react";
import { FC, use, useCallback, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";

import { useAllUsers } from "@/features/users/hooks/useAllUsers";
import { UserDetailModal } from "@/features/users/components/UserDetailModal";
import { useSelectUser } from "@/features/users/hooks/useSelectUser";
import { User } from "@/types/api/user";
import { useLoginUser } from "@/features/users/hooks/useLoginUser";

const Home: FC = () => {
  const { users, getUsers, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  console.log(loginUser);

  useEffect(() => {
    const fetchUsers = async () => {
      await getUsers();
    };
    fetchUsers();
  }, []);

  const onClickUser = useCallback((id: number, users: Array<User>) => {
    onSelectUser({ id, users, onOpen });
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users?.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.name}
                fullName={user.username}
                onClick={() => onClickUser(user.id, users)}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Home;
