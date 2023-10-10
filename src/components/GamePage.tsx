import { Button, Flex, Heading, Spinner } from "@chakra-ui/react";

import useIndividualGame from "../hooks/useIndividualGame";

interface Props {
  gameId: number;
  openClosePage: (value: boolean) => void;
}

const GamePage = ({ gameId, openClosePage }: Props) => {
  const { data, error, isLoading } = useIndividualGame(gameId);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const consoleLogs = () => {
    console.log(data);
  };

  return (
    <Flex>
      <Heading>{gameId}</Heading>
      <Button onClick={() => openClosePage(false)}>X</Button>
      <Button onClick={consoleLogs}>CONSOLO.LOG(DATA)</Button>
    </Flex>
  );
};

export default GamePage;
