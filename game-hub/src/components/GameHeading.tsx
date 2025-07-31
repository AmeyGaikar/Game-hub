import { GameQuery } from "@/App";
import usePlatforms from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatformID = gameQuery.platform;
  const selectedGenreId = gameQuery.genre;

  const platformText = data.results.find(
    (platform) => platform.id === selectedPlatformID
  );

  const genreText = data.results.find((genre) => genre.id === selectedGenreId);
  const heading = `${platformText?.name || ''} ${genreText?.name || ''} Game`;
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
