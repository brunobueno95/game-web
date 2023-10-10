import {
  Button,
  Flex,
  Heading,
  Spinner,
  Image,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react";

import useIndividualGame from "../hooks/useIndividualGame";
import getCroppedImageUrl from "../services/image-url";
import removeHtmlTags from "../services/remove-htmlTag";

interface Props {
  gameId: number;
  openClosePage: (value: boolean) => void;
}

const GamePage = ({ gameId, openClosePage }: Props) => {
  const { data, error, isLoading } = useIndividualGame(gameId);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  if (data[0])
    return (
      <>
        <Button
        marginTop={5}
          marginLeft={5}
          marginBottom={0}
          textAlign={"right"}
         
          colorScheme={"red"}
          onClick={() => openClosePage(false)}
        >
          X
        </Button>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingBottom={20}
        >
          <Heading fontSize={"5xl"} my={20}>
            {data[0].name}
          </Heading>
          <Image
            borderRadius={"10px"}
            width={{ base: "100%", md: "500px" }}
            height={"auto"}
            src={getCroppedImageUrl(data[0].background_image)}
          />

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={'center'}
            boxSize={"60%"}
            marginTop={10}
          >
            {" "}
            <Text fontSize={"2xl"}> {removeHtmlTags(data[0].description)}</Text>
            <HStack marginTop={4}>
              <Text fontSize={"xl"}>Website: </Text>
              <Button color={"#16BCE6"} variant={"link"} fontSize={"lg"}>
                {data[0].website}
              </Button>
            </HStack>
          </Box>
        </Flex>
      </>
    );
};

export default GamePage;
