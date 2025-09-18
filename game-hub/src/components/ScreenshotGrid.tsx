import useScreenshot from "../hooks/useScreenshot";
import { Image, Img, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const ScreenshotGrid = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default ScreenshotGrid;
