'use client'

import { useState } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { useAuth } from "../../features/users/hooks/useAuth";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

const Home: FC = () => {
  const [userId, setUserId] = useState<string>("");
  const { login, loading } = useAuth();

  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton
            isDisabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )};

export default Home;
