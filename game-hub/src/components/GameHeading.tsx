import useGameStore from "../store";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Game`;
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
