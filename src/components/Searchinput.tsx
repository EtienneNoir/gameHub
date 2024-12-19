import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const Searchinput = () => {
  return (
    <InputGroup>
      <InputLeftElement marginX={3} marginY="18px" children={<BsSearch />} />
      <Input
        placeholder="        Search..."
        w="100%"
        bg="gray.900"
        color="white"
        p={3}
        borderRadius={20}
        _placeholder={{ color: "gray.500" }}
      />
    </InputGroup>
  );
};

export default Searchinput;
