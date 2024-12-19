import {
  Checkbox,
  HStack,
  useColorMode,
  Image,
  Text,
  Switch,
} from "@chakra-ui/react";
const ColorModeSwitch = () => {
  // colorMode represents the current Mode
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="20px">
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
