import { extendBaseTheme, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendBaseTheme({ config });

export default theme;
