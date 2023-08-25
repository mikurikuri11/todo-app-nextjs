import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none", // ホバー時のスタイル
        },
      },
    },
  },
});

export default theme;