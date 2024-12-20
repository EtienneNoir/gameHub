import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searchText: string) => void;
}
const Searchinput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search..."
          w="100%"
          bg="gray.900"
          color="white"
          borderRadius={20}
          _placeholder={{ color: "gray.500" }}
        />
      </InputGroup>
    </form>
  );
};

export default Searchinput;
