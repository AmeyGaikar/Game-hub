import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Prop {
  onSelectGenre: (genre: Genre) => void;
  selectedgenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedgenre }: Prop) => {
  const { data, isLoading, errors } = useGenre();

  if (errors) return null;
  if (isLoading) return <Spinner />;

  return (
    <List> 
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
            fontWeight={selectedgenre?.id === genre.id ? 'bold' : 'normal' }
              onClick={() => {
                onSelectGenre(genre);
              }}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
