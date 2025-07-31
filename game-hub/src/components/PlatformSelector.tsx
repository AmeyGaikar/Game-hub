import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: number) => void;
  selectedPlatform: number | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform: selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();

  const selected = data.results.find(
    (platform) => platform.id === selectedPlatform
  );
  let buttonText = selected ? selected.name : "Platform";

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {buttonText}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
