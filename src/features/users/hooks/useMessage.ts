import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title,
      status,
      position: "bottom-left",
      duration: 2000,
      isClosable: true,
    });
  }, []);
  return { showMessage };
}
