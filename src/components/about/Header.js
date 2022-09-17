import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return <div>Header</div>;
};
