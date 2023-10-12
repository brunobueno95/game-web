
import { Game } from "../../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIcon from "../PlatformIcon";
import ScoreMeta from "../ScoreMeta";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
  gameIDclickFunction : (id:number) => void;
}

const GameCard = ({ game, gameIDclickFunction }: Props) => {
  const handleCardClick = () => {
    gameIDclickFunction(game.id);
  };
  return (
    <Card onClick={handleCardClick}    height={"100%"} paddingBottom={5}>
      <Image height={"70%"} src={getCroppedImageUrl(game.background_image)} />
      <CardBody px={5} py={3} height={"30%"}>
      <HStack justifyContent={"space-between"} >
          {" "}
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />{" "}
          <ScoreMeta score={game.metacritic} />
        </HStack>
        <Heading height={"80%"} fontSize={"xl"} marginTop={4}>
          {game.name}
        </Heading>
     
      </CardBody>
    </Card>
  );
};

export default GameCard;
