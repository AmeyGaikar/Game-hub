import { GameQuery } from "@/App";
import usePlatforms from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Game`;
  return (
    <Heading marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
