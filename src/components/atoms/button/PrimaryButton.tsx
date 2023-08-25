import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton:FC<Props> = (props) => {
  const { children, isDisabled = false, loading = false, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={isDisabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
