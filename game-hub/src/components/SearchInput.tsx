import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText:string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
      <form
      onSubmit={(event) => {
          event.preventDefault();
         if(ref.current) onSearch(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search games...."
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
