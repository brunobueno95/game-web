import React from "react";
import { Game } from "../../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIcon from "../PlatformIcon";
import ScoreMeta from "../ScoreMeta";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={"100%"} paddingBottom={5}>
      <Image height={"70%"} src={getCroppedImageUrl(game.background_image)} />
      <CardBody px={5} py={3} height={"30%"}>
        <Heading height={"80%"} fontSize={"xl"}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"} marginTop={3}>
          {" "}
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />{" "}
          <ScoreMeta score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
