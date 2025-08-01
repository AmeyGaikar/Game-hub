import { GameQuery } from "@/App";
import usePlatforms from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genre } = useGenre(gameQuery.genreId);
  const {platform } = usePlatform(gameQuery.platformId);


  const heading = `${genre?.name || ""} ${platform?.name || ""} Game`;
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
