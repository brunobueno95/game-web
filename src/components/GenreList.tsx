import useGenres, { Genre } from "../hooks/useGenres";
import { List, ListItem, HStack, Image, Button, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre} : Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack py={"8px"}>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={()=> onSelectGenre(genre)} variant={'link'} fontSize={"lg"}> {genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
